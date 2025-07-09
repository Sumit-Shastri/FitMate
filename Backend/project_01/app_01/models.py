from django.db import models

# Create your models here.


class step_01(models.Model):
    firstName = models.CharField(max_length=30)
    lastName = models.CharField(max_length=30)
    gender = models.CharField(max_length=10)
    dob = models.DateField( auto_now=False, auto_now_add=False)
    country = models.CharField(max_length=30)
    pinCode = models.CharField(max_length=50)

    def __str__(self):
        return self.firstName


