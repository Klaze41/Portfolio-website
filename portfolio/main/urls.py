from django.urls import path
from . import views
urlpatterns =[
    path('',views.index,name='index'),
    path('about',views.about,name='about'),
    path('project',views.project,name='project'),
    path('ja',views.ja,name='ja'),
    path('ja/about',views.jaAbout,name='jaAbout')
]