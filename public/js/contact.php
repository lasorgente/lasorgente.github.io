<?php

$name 		   = $_POST["name"];
$email_address = filter_var($_POST["email"], FILTER_VALIDATE_EMAIL);
if ($email === FALSE) {
    echo 'Invalid email';
    exit(1);
}
$arrival 	= $_POST["arrival"];
$departure 	= $_POST["departure"];
$adults 	= $_POST["adults"];
$children 	= $_POST["children"];
$phone 		= $_POST["phone"];
$message 	= $_POST["message"];
$lang 		= $_POST["lang"];

// Create the email and send the message
$to = "info@hotellasorgente.info"; 
$email_subject = "Richiesta informazioni da sito internet";
$email_body = "Nome: $name \n\nArrivo: $arrival\n\nPartenza: $departure\n\nNumero di adulti: $adults\n\nNumero di bambini: $children\n\nTelefono: $phone\n\nLingua: $lang\n\nMessaggio:\n$message";

//$headers = "From: info@hotellasorgente.info\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers = "From: $email_address";

ini_set("SMTP","smtp.hotellasorgente.info");
ini_set("sendmail_from","postmaster@hotellasorgente.info");
ini_set("smtp_port",25);

$val = mail($to,$email_subject,$email_body,$headers);

if($val)
{
	echo "y";
}
else
{
	echo "There was an error, please try again.";
}

?>
