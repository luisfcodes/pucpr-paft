from typing import Dict, Sequence
from django.contrib import admin

from .models import Movie

class MovieAdmin(admin.ModelAdmin):
  search_fields: Sequence[str] = ('title',)
  list_filter = ('id',)
  prepopulated_fields: Dict[str, Sequence[str]] = {'slug': ('title',)}

admin.site.register(Movie, MovieAdmin)