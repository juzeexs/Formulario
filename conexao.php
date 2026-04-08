<<<<<<< HEAD
<?php
// O Railway fornece essas variáveis automaticamente se você adicionou um Banco de Dados no projeto
$host = getenv('MYSQLHOST') ?: 'localhost'; 
$user = getenv('MYSQLUSER') ?: 'root'; 
$pass = getenv('MYSQLPASSWORD') ?: ''; 
$db   = getenv('MYSQLDATABASE') ?: 'cadastro_db';
$port = getenv('MYSQLPORT') ?: '3306';

// Criando a conexão
$conn = new mysqli($host, $user, $pass, $db, $port);

// Checando se houve erro
if ($conn->connect_error) {
    die("Erro de conexão: " . $conn->connect_error);
}

// Se chegou aqui, conectou com sucesso!
=======
<?php
// O Railway fornece essas variáveis automaticamente se você adicionou um Banco de Dados no projeto
$host = getenv('MYSQLHOST') ?: 'localhost'; 
$user = getenv('MYSQLUSER') ?: 'root'; 
$pass = getenv('MYSQLPASSWORD') ?: ''; 
$db   = getenv('MYSQLDATABASE') ?: 'nome_do_seu_banco_local';
$port = getenv('MYSQLPORT') ?: '3306';

// Criando a conexão
$conn = new mysqli($host, $user, $pass, $db, $port);

// Checando se houve erro
if ($conn->connect_error) {
    die("Erro de conexão: " . $conn->connect_error);
}

// Se chegou aqui, conectou com sucesso!
>>>>>>> 777c3b4d4bfa862c115bc4634ce9567bc50ef6d3
?>