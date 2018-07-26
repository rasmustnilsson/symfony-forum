<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserFixtures extends Fixture
{

    private $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager)
    {
        $admin = new User();
        $admin->setUsername('admin');

        $admin->addRole('ROLE_ADMIN');

        $admin->setPassword($this->encoder->encodePassword($admin, 'class'));

        $user = new User();
        $user->setUsername('user');

        $user->setPassword($this->encoder->encodePassword($user, 'class'));

        $manager->persist($admin);
        $manager->persist($user);

        $manager->flush();
    }
}
