<?php

namespace App\Controller;

use App\Entity\Post;
use App\Entity\Comment;
use App\Entity\Category;
use Symfony\Component\HttpFoundation\Request;
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

    /**
     * @Route("/getCategoryNames", name="getCategoryNames", methods={"POST"})
     */
    public function getCategoryNames()
    {

        $repository = $this->getDoctrine()->getRepository(Category::class);
        $categories = $repository->getNames();
        return new JsonResponse($categories);
    }

    public function getPostsFromCategory($category = 'General')
    {
        $repository = $this->getDoctrine()->getRepository(Category::class);
        $category = $repository->findByName($category);

        return new JsonResponse($category->getPostsData());
    }

    public function getPost($id = '')
    {
        $repository = $this->getDoctrine()->getRepository(Post::class);
        $post = $repository->find($id);

        if(!$post) return new JsonResponse(['err' => 'post doesn\'t exist']);

        return new JsonResponse($post->getData());
    }

    /**
     * @Route("/createPost", name="createPost", methods={"POST"})
     */
    public function createPost(Request $request)
    {

        $title = $request->request->get('title');
        $categoryName = $request->request->get('category');
        $body = $request->request->get('body');

        $user = $this->getUser();

        $repository = $this->getDoctrine()->getRepository(Category::class);
        $category = $repository->findByName($categoryName);

        $post = new Post();
        $post->setTitle($title)
            ->setBody($body)
            ->setOwner($user)
            ->addCategory($category);

        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($user);
        $entityManager->flush();

        return new JsonResponse([ 'id' => $post->getId() ]);
    }

    /**
     * @Route("/submitComment", name="submitComment", methods={"PoST"})
     */
    public function submitComment(Request $request)
    {

        $commentText = $request->request->get('comment');
        $id = $request->request->get('post');
        
        $repository = $this->getDoctrine()->getRepository(Post::class);
        $post = $repository->find($id);

        $user = $this->getUser();

        $comment = new Comment();
        $comment->setParentPost($post);
        $comment->setBody($commentText);
        $comment->setOwner($user);

        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($comment);
        $entityManager->flush();

        return new JsonResponse([
            'body' => $commentText,
            'owner' => $user->getUsername(),
            'date' => $comment->getDate(),
            'id' => $comment->getId()
        ]);
    }
}
