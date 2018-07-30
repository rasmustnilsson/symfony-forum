<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Component\HttpFoundation\Cookie;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Core\Authentication\Token\UsernamePasswordToken;

class SecurityController extends Controller
{
    /**
     * @Route("/login", name="login")
     */
    public function login(Request $request, AuthenticationUtils $utils)
    {
        $username = $utils->getLastUsername();
        $response = $this->render('base.html.twig');
        if($username) $response->headers->setCookie(new Cookie('lastUsername', $username, 0, '/login', null, false, false));
        return $response;

    }

    /**
     * @Route("/signup", name="signup")
     */
    public function signup(Request $request, UserPasswordEncoderInterface $encoder)
    {
        
        $username = $request->request->get('_username');
        $password = $request->request->get('_password');
        $response = $this->render('base.html.twig');

        if ($request->isMethod('post')) {
            // if data is missing (can be improved to validate input data)
            if($username == null || $password == null) {
                $response->headers->setCookie(new Cookie('signup-error', 'error signing up!', 0, '/signup', null, false, false));
                $response->headers->setCookie(new Cookie('lastUsername', $username, 0, '/signup', null, false, false));
                return $response;
            }

            $repository = $this->getDoctrine()->getRepository(User::class);
            $user = $repository->findOneBy(['username' => $username]);

            // if user already exists
            if($user != null) {
                $response->headers->setCookie(new Cookie('signup-error', 'username already exists!', 0, '/signup', null, false, false));
                $response->headers->setCookie(new Cookie('lastUsername', $username, 0, '/signup', null, false, false));
                return $response;
            }

            $user = new User();
            $user->setUsername($username);
            
            // sets and encodes password
            $user->setPassword($encoder, $password);
            
            // saves user
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
            $entityManager->flush();

            // creates user token for login authentication
            $token = new UsernamePasswordToken($user, $user->getPassword(), 'main', $user->getRoles());
            
            // sets user token
            $this->get('security.token_storage')->setToken($token);
            $this->get('session')->set('_security_main', serialize($token));
            
            return $this->redirectToRoute('default');
        }

        return $response;
    }

        
    /**
     * @Route("/logout", name="logout")
     */
    public function logout() {}
            
    /**
     * @Route("/isAuthenticated", name="isAuthenticated")
     */
    public function isAuthenticated() {

        if ($this->get('security.authorization_checker')->isGranted('ROLE_USER')) {
            return new JsonResponse(array('isAuthenticated' => true));
        }

        return new JsonResponse(array('isAuthenticated' => false));
    }
}
