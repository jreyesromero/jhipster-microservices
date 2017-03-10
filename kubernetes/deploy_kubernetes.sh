kubectl apply -f registry

kubectl apply -f microServiceGatewayStudent

kubectl apply -f microServicesStudent

echo ""
echo "MINIKUBE DASHBOARD"
echo "***************************"
/c/minikube.exe dashboard --url=true
