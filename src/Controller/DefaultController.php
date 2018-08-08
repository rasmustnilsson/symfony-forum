<?php

namespace App\Controller;

use App\Entity\Post;
use Symfony\Component\HttpFoundation\Cookie;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="default")
     * @Route("/category/{category}", name="category")
     * @Route("/post/{post}", name="post")
     * @Route("/dashboard", name="dashboard")
     * @Route("/create", name="createPostPage")
     */
    public function index()
    {   
        return $this->render('base.html.twig');
    }
}
