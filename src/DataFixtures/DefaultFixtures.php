<?php

namespace App\DataFixtures;

use App\Entity\Post;
use App\Entity\User;
use App\Entity\Comment;
use App\Entity\Category;
use joshtronic\LoremIpsum;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class DefaultFixtures extends Fixture
{
    private $lipsum;

    private $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $lipsum = new LoremIpsum();
        $this->lipsum = $lipsum;
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager)
    {
        $users_array = [['admin', ['ROLE_ADMIN']],['user', []]];

        $this->createCategories($manager);

        foreach ($users_array as $item) {
            $user = new User();
            $user->setUsername($item[0]);

            foreach($item[1] as $role) {
                $user->addRole($role);
            }
            
            $user->setPassword($this->encoder, 'class');
            $manager->persist($user);
            $manager->flush();

            $this->createPost($user, 'General', $manager);
            $this->createPost($user, 'Games', $manager);
            $this->createPost($user, 'Work', $manager);

            $this->commentOnAllPosts($manager, $user);


        }

    }

    public function createCategories(ObjectManager $manager)
    {
        $category_array = [['General', 'General discussion.'], ['Games', 'Everything about games!'], ['Work', 'Everything work related.']];
    
        foreach($category_array as $data) {
            $category = new Category();
            $category->setName($data[0]);
            $category->setDescription($data[1]);
            $manager->persist($category);
        }

        $manager->flush();
    }
    
    public function createPost(User $user, String $catagory, ObjectManager $manager)
    {

        $post = new Post();
        $post->setTitle($this->lipsum->words(rand(3,8)));
        $post->setBody($this->lipsum->paragraphs(rand(1,2)));

        $category = $manager
            ->getRepository(Category::class)
            ->findOneBy(['name' => $catagory]);

        $post->addCategory($category);
        $post->setOwner($user);
        $manager->persist($post);
        $manager->flush();
    }

    public function commentOnAllPosts(ObjectManager $manager, User $user)
    {
        $posts = $manager
            ->getRepository(Post::class)
            ->FindAll();

        foreach($posts as $post) {
            $comment = new Comment();
            $comment->setOwner($user);
            $comment->setBody($this->lipsum->sentences(rand(2,4)));
            $comment->setParentPost($post);
            $manager->persist($comment);
            $manager->flush();
        }
    }
}
