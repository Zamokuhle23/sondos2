package Filters;

//import com.sun.org.slf4j.internal.LoggerFactory;

import org.slf4j.*;
import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebFilter("/*")
public class loginFilter implements Filter {
    private String username;
    private String password;
    private final Logger log = LoggerFactory.getLogger(loginFilter.class);

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletResponse resp = (HttpServletResponse) servletResponse;
        HttpServletRequest req = (HttpServletRequest) servletRequest;
        this.username = req.getParameter("username");
        this.password = req.getParameter("username");

        PrintWriter out = resp.getWriter();
        String path = req.getServletPath();
        if ("/".equals(path) || "/home".equals(path) || "/home.jsp".equals(path)) {
            filterChain.doFilter(servletRequest, servletResponse);

        } else {
            String isLogged = null;
            Cookie[] cookie = req.getCookies();
            for (Cookie c : cookie) {
                if (c.getName().equals("user"))
                    isLogged = c.getValue();
            }
            if (isLogged != null) {
                filterChain.doFilter(servletRequest, servletResponse);
                return;
            }
            resp.sendRedirect("home");
        }
    }
    public void process(){
        log.info(username + " used website " + "with password " + password);
    }
    }




