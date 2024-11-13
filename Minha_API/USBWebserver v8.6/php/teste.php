<?php
$str = '"doSul Sistemas, sinônimo de inovações"';//string inicial
$str = iconv( "UTF-8" , "ASCII//TRANSLIT//IGNORE" , $str);
echo "\n$str";//imprime a string origem
$str = strtolower($str);//converte todos os caracteres para minúsculo
echo "\n$str";//imprime a string modificada
for($i = 0; $i < strlen($str)-1; $i++){ //instrução de repetição de acordo com a quantidade de caracteres
  $str{$i} = strtoupper($str{$i}); //converte a string para maiúscula
  if($str{$i} == "ô" || $str{$i} == "ç" || $str{$i} == "õ"){ //busca a ocorrência de caracteres não determinados em charset 
     $str{$i} = str_replace("ô","Ô",$str{$i});//função de modificar a ocorrência
     $str{$i} =str_replace("ç","Ç",$str{$i});//função de modificar a ocorrência
     $str{$i} =str_replace("ô","Õ",$str{$i});//função de modificar a ocorrência
  }
  if($i > 1 && $str{$i-1} != " "){// laço de repetição para setar minúsculas
    $str{$i-1} = strtolower($str{$i-1});
    if($str{$i-1} == "Ô" || $str{$i-1} == "Ç" || $str{$i-1} == "Õ"){
      $str{$i-1} = str_replace("Ô","ô",$str{$i-1});//função de modificar a ocorrência
      $str{$i-1} = str_replace("Ç","ç",$str{$i-1});//função de modificar a ocorrência
      $str{$i-1} = str_replace("Õ","õ",$str{$i-1});//função de modificar a ocorrência
    }
  }
  echo "\n$str";
}
?>