<?php

namespace App\Controller;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Constraints\Json;


class AuthController extends AbstractController
{
    private  $userRepository;
    private  $security;
    private  $serializerInterface;
    public function __construct(
        UserRepository $userRepository,
        Security $security,
        SerializerInterface $serializerInterface

    ) {
        $this->userRepository = $userRepository;
        $this->security= $security;
        $this->serializerInterface = $serializerInterface;
    }
    
   
    /**
     * @Route("/register", name="register")
     */
    public function register(Request $request): JsonResponse
    { 
        $jsonData = json_decode($request->getContent());
        $user  = $this->userRepository->addUser($jsonData);
        return new JsonResponse([
            'msg'=>'register success',
            'user'=> $this->serializerInterface->serialize($user,'json'),
        ],201);
    }
    
    /**
     * @Route("/getUser", name="getUser")
     */
    public function user(): JsonResponse
    {
        $user = $this->security->getUser();

        $dataUser = $this->serializerInterface->serialize($user, 'json');

          
        return new JsonResponse([
           $dataUser 
        ],200);
    }
    
    /**
     * @Route("/logout", name="logout")
     */
    public function logout(): JsonResponse
    {
        return new JsonResponse([
            'msg'=>'logout success'
        ]);
    }
}
