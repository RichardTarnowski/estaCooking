<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
   #[Route('/', name: 'home')]
    public function index(): Response
    {
        return $this->render('index.html.twig', [
            'controller_name' => 'DefaultController',
            'prueba' => 'Hola joder!'
        ]);
    }

    #[Route('/prueba', name: 'prueba')]
    public function prueba(): Response
    {
        return $this->render('index_prueba.html.twig', [
            'controller_name' => 'DefaultController',
            'prueba' => 'Me cago en dios, por fin funciona la prueba.'
        ]);
    }
}