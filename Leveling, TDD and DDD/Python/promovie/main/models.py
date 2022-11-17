from django.db import models
from django.urls import reverse
from django.utils.text import slugify
from django.db.models.signals import post_save, pre_save
from django.dispatch import receiver

class Movie(models.Model):
    banner = models.ImageField('uploads/banners')
    title = models.CharField(max_length=250)
    slug = models.SlugField(max_length=100)
    description = models.TextField()

    def get_absolute_url(self):
        return reverse('detail', args=[self.slug])

    def get_absolute_url_update(self):
        return reverse('edit', args=[self.slug])

    def get_absolute_url_delete(self):
        return reverse('delete', args=[self.slug])

    def __str__(self):
        return self.title

@receiver(post_save, sender=Movie)
def insert_slug(sender, instance, **kwargs):
    if not (instance.slug):
        instance.slug = slugify(instance.title)
        return instance.save()
    if not (instance.slug == slugify(instance.title)):
        instance.slug = slugify(instance.title)
        return instance.save()
    