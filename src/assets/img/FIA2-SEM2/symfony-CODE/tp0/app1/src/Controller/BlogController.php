<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class BlogController extends AbstractController
{
    /**
     * @Route("/", name="blog")
     */
 
    public function index(): Response
    {
        return $this->render('blog/index.html.twig', [
            'un_var' => 'hamdi','nb' => 10
        ]);
    }
      /**
        * @Route("/home", name="home")
      */
   
    public function home() :Response { return $this->render('blog/home.html.twig'); }
}
