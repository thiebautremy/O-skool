<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class LoginController extends AbstractController
{
    /**
     * @Route("/api/user/login_check", name="api_user_login_check", methods={"POST"}, options={"expose"=true})
     * @param Request $request
     * @param RendezVousRepository $rvr
     * @return Response
     */
    public function loginCheck(UserRepository $ur, Request $request): JsonResponse
        {
        $data = json_decode($request->getContent(), true);
        $user = $ur->findByEmail($data['data']['email']);

       //? On récupère les passwords
        $passwordInInput = $data['data']['password'];
        $passwordInDb = $user['password'];

        //? On vérifie qu'un utilisateur existe dans la bdd avec cet email
        if (count($user) == 0) {
            // fail authentication with a custom error
            return new JsonResponse('user not found', Response::HTTP_NO_CONTENT);
        }
        else {
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
    }
}
