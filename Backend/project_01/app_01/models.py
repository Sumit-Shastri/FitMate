from django.db import models

# Create your models here.

class BasicInfo(models.Model):
    firstName = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    gender = models.CharField(max_length=10)
    dob = models.DateField()
    country = models.CharField(max_length=100)
    pincode = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    asach = models.CharField(max_length=50)

    def __str__(self):
        return self.firstName + " " + self.lastName


