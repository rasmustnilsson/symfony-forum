<?php

namespace App\Controller;

use App\Entity\Category;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;

class DataController extends Controller
{
    /**
     * @Route("/getCategories", name="getCategories")
     */
    public function getCategories()
    {

        $categories = $this->getDoctrine()
            ->getRepository(Category::class)
            ->getAll();

        return new JsonResponse(array('categories' => $categories));
    }
}
