<?php

namespace App\Controller;

use App\Entity\Post;
use App\Entity\Category;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

class DataController extends Controller
{
    /**
     * @Route("/getCategories", name="getCategories")
     */
    public function getCategories()
    {

        $repository = $this->getDoctrine()->getRepository(Category::class);

        $ids = $repository->getAll();

        $categories = [];

        foreach($ids as $id) {
            $category = $repository->find($id);
            array_push($categories, [
                'name' => $category->getName(),       
                'description' => $category->getDescription(),       
                'postCount' => count($category->getPosts()),       
            ]);
        }

        return new JsonResponse(array('categories' => $categories));
    }

    public function getPostsFromCategory($category = 'General')
    {
        $repository = $this->getDoctrine()->getRepository(Category::class);
        $category = $repository->findByName($category);

        return new JsonResponse($category->getPostsData());
    }

    public function getPost($id = '') {
        $repository = $this->getDoctrine()->getRepository(Post::class);
        $post = $repository->find($id);

        if(!$post) return new JsonResponse(['err' => 'post doesn\'t exist']);

        return new JsonResponse($post->getData());
    }
}
