<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class SubscribeController extends AbstractController
{
    /**
     * @Route("/api/user/add", name="api_user_add", methods={"POST"}, options={"expose"=true})
     */
    public function newUser(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $newUser = new User();
        if(
            strlen($data['data']['user_name']) > 0 && 
            strlen($data['data']['email']) > 0 &&
            strlen($data['data']['password']) > 0
        ){
            $newUser
                ->setUserName($data['data']['user_name'])
                ->setEmail($data['data']['email'])
                ->setPassword(password_hash($data['data']['password'], PASSWORD_DEFAULT));
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($newUser);
            $entityManager->flush();
    
            return new JsonResponse(
                [
                    'status' => JsonResponse::HTTP_CREATED,
                    'user' => $newUser
                ],
                
            );
        } else {
            return new JsonResponse(
                [
                    'status' => JsonResponse::HTTP_NO_CONTENT
                ],
                
            );
        }
    }
}
