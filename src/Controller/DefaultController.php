<?php

namespace App\Controller;

use App\Entity\Post;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="default")
     */
    public function index()
    {

        $latestPosts = $this->getDoctrine()
            ->getRepository(Post::class)
            ->getLatestPosts();

        return $this->render('default/index.html.twig', [
            'latestPosts' => $latestPosts,
        ]);
    }
}
