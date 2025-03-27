from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from django.contrib.auth import authenticate
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import UserSerializer

class RegisterView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        print("Received Data:", request.data)
        user = User.objects.create_user(
            username=request.data['username'],
            email=request.data['email'],
            password=request.data['password'],
            first_name=request.data['first_name'],
            last_name=request.data['last_name']
        )
        return Response({'message': 'User created successfully'})

@api_view(['POST'])
def login_view(request):
    user = authenticate(username=request.data['username'], password=request.data['password'])
    if user:
        return Response({
            'message': 'Login successful',
            'username': user.username,
            'email': user.email,
            'first_name': user.first_name,
            'last_name': user.last_name,
        })
    return Response({'message': 'Invalid credentials'}, status=400)