<?php

namespace App\DataFixtures;

use App\Entity\Post;
use App\Entity\User;
use joshtronic\LoremIpsum;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class DefaultFixtures extends Fixture
{

    private $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager)
    {

        $users_array = [['admin', ['ROLE_ADMIN']],['user', []]];

        foreach ($users_array as $item) {
            $user = new User();
            $user->setUsername($item[0]);

            foreach($item[1] as $role) {
                $user->addRole($role);
            }
            
            $user->setPassword($this->encoder->encodePassword($user, 'class'));
            for($i = 0; $i < 4; $i++) {
                $this->createPost($user, $manager);
            }

            $manager->persist($user);

        }

        $manager->flush();
    }

    public function createPost(User $user, $manager)
    {
        $lipsum = new LoremIpsum();

        $post = new Post();
        $post->setTitle($lipsum->words(rand(3,8)));
        $post->setBody($lipsum->paragraphs(rand(1,4)));
        $post->setOwner($user);

        $manager->persist($post);
    }
}
