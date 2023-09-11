echo '\n\nrequesting all contas'
curl localhost:3000/contas

echo '\n\nrequesting conta'
curl localhost:3000/contas/1

echo '\n requesting with wrong body'
curl --silent -X POST \
    --data-binary '{"invalid":"data"}'\
    localhost:3000/contas

echo '\n'
echo '\n\n Creating New Conta'
curl --silent -X POST \
    --data-binary '{"client":"Alfredo","numberCount":3,"saldo":300,"typeCount":"corrent"}'\
    localhost:3000/contas
echo '\n'