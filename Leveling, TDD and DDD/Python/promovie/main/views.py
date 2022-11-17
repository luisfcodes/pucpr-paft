from .models import Movie

from django.http import HttpResponse
from django.template import loader
from django.urls import reverse_lazy
from django.shortcuts import render, get_object_or_404
from django.views.generic import UpdateView, DeleteView
from django.views.generic.edit import CreateView
from django.contrib.messages.views import SuccessMessageMixin

def index(request):
    latest_movie_list = Movie.objects.order_by('-id')
    template = loader.get_template('main/index.html')
    context = {
        'latest_movie_list': latest_movie_list
    }
    return HttpResponse(template.render(context, request))

def detail(request, movie_slug):
    movie = get_object_or_404(Movie, slug=movie_slug)
    return render(request, 'main/detail.html', {'movie': movie})

class CreateView(SuccessMessageMixin, CreateView):
    model = Movie
    template_name: str = 'main/new.html'
    fields = ('banner', 'title', 'description')
    success_message = "'%(field)s' adicionado com sucesso!"

    def get_success_message(self, cleaned_data):
        return self.success_message % dict(
            cleaned_data,
            field=self.object.title
        )

class UpdateView(SuccessMessageMixin, UpdateView):
    model = Movie
    template_name: str = 'main/edit.html'
    fields = ('banner', 'title', 'description')
    success_message = "'%(field)s' alterado com sucesso!"

    def get_success_message(self, cleaned_data):
        return self.success_message % dict(
            cleaned_data,
            field=self.object.title
        )

class DeleteView(SuccessMessageMixin, DeleteView):
    model = Movie
    template_name: str = 'main/delete.html'
    success_url = reverse_lazy('index')
    success_message = "'%(field)s' deletado com sucesso!"

    def get_success_message(self, cleaned_data):
        return self.success_message % dict(
            cleaned_data,
            field=self.object.title
        )