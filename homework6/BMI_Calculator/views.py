
from django.shortcuts import render
from django.http import HttpResponse

def Home(request):
    return render(request,'Home.html')

def result(request):
    advice = "bb"
    status = ""
    gender = request.POST["gender"]
    weight = float(request.POST["weight"])
    height = float(request.POST["height"])
    bmi = weight/(height*height)

    if bmi < 18.5:
        advice = "Gain " + str(18.5*height*height-weight) + "kg"
        if bmi < 16:
         status = "(Severe Underweight)"
        else:
         status = "(Underweight)"
    elif bmi <= 25:
        status = "(Normal)"
        advice = "keep it up"
    elif bmi < 25:
        advice = "Lose " + str(weight-25*height*height) + "kg"
        if bmi <= 30:
         status = "(Overweight)"
        elif bmi <= 35:
         status = "(Obesity)"
        elif bmi <= 40:
         status = "(Obesity is Sharp)"
        else:
         status = "(Very Severe Obesity)"
    res = "BMI = " + str(round(bmi,2)) + status

    return render(request,'index.html',{'res':res,'advice':advice})