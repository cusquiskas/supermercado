<?php

    session_start();
    error_reporting(E_ALL & ~E_NOTICE);

    require_once '../../conex/conf.php';  //información crítica del sistema
    require_once '../../conex/dao.php';   //control de comunicación con la base de datos MySQL
    require_once '../../tabla/controller.php';   //genera la clase de una tabla dinámicamente bajo petición

    require_once '../../js/function.php';   //genera la clase de una tabla dinámicamente bajo petición

    header('Content-Type: application/json; charset=utf-8');

    $manejador = ControladorDinamicoTabla::set('COMPRA');
    if ($manejador->give([]) != 0) {
        die(json_encode(['success' => false, 'root' => $manejador->getListaErrores()]));
    }
    $lista = $manejador->getArray();

    $ctrlTienda = ControladorDinamicoTabla::set('TIENDA');
    for ($i = 0; $i < count($lista); ++$i) {
        if ($ctrlTienda->give(['tie_id' => $lista[$i]['com_tie']]) != 0) {
            die(json_encode(['success' => false, 'root' => $ctrlTienda->getListaErrores()]));
        }
        $subList = $ctrlTienda->getArray();
        $lista[$i]['tie_name'] = $subList[0]['tie_name'];
        $lista[$i]['com_dateX'] = Fecha::formatea($lista[$i]['com_date'], 'd/m/Y');
    }
    echo json_encode(['success' => true, 'root' => $lista]);

    unset($manejador);
?>

