from django.db import models

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=60)
    email = models.EmailField(max_length=254)

class Book(models.Model):
    title = models.CharField(max_length=60)
    author = models.CharField(max_length=60)
    isbn = models.CharField(max_length=14)
    isavailable = models.BooleanField(default=True)