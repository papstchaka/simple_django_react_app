from django.db import models

class Note(models.Model):
    name = models.CharField("Name", max_length=240)
    deadlineDate = models.DateField("Deadline Date", max_length=10)
    registrationDate = models.DateField("Registration Date", auto_now_add=True)

    def __str__(self):
        return self.name
