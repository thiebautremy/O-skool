<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\StudentRepository;
use App\Repository\UserRepository;
use ErrorException;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Exception\CustomUserMessageAuthenticationException;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\Exception\NotEncodableValueException;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;

class LoginController extends AbstractController
{
    /**
     * @Route("/api/user/login_check", name="api_user_login_check", methods={"POST"}, options={"expose"=true})
     */
    public function loginCheck(UserRepository $ur, Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $user = $ur->findByEmail($data['data']['email']);

       //? On récupère les passwords
        $passwordInInput = $data['data']['password'];
        $passwordInDb = $user[0]['password'];

        //? On vérifie qu'un utilisateur existe dans la bdd avec cet email
        if($user){
            //? On compare les passwords entre l'input et la DB et on retourne en conséquence la réponse
            if (password_verify($passwordInInput, $passwordInDb)) {
                return new JsonResponse(
                    [
                        'response' => "password valid",
                        'user' => $user
                    ],
                );
            } else {
                return new JsonResponse(
                    [
                        'response' => "password invalid"
                    ],
                );
            }
        } 

        if (!$user) {
            // fail authentication with a custom error
            throw new CustomUserMessageAuthenticationException('Email could not be found.');
        }

    }
}
