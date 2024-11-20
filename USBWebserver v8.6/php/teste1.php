<?php 
header("Content-Type: application/json; charset=utf-8");
//header("Content-Type: text/html; charset=utf-8",true);
$str = '"doSul Sistemas, sinônimo de inovações"';//string inicial
echo "\n$str";//imprime a string origem
$str = strtolower($str);//converte todos os caracteres para minúsculo
echo "\n$str";//imprime a string modificada
for($i = 0; $i < strlen($str)-1; $i++){ //instrução de repetição de acordo com a quantidade de caracteres
    $str{$i} = strtoupper($str{$i}); //converte a string para maiúscula
    $str{$i} = str_replace("/[ô]/","/[Ô]/",$str{$i});//função de modificar a ocorrência
    $str{$i} = str_replace("/[ç]/","/[Ç]/",$str{$i});//função de modificar a ocorrência
    $str{$i} = str_replace("/[ô]/","/[Õ]/",$str{$i});//função de modificar a ocorrência
    if($i > 1 && $str{$i-1} != " "){// laço de repetição para setar minúsculas
        $str{$i-1} = strtolower($str{$i-1});
        $str{$i-1} = str_replace("/[Ô]/","/[ô]/",$str{$i-1});//função de modificar a ocorrência
        $str{$i-1} = str_replace("/[Ç]/","/[ç]/",$str{$i-1});//função de modificar a ocorrência
        $str{$i-1} = str_replace("/[Õ]/","/[õ]/",$str{$i-1});//função de modificar a ocorrência
    }
  	echo "\n$str";
}