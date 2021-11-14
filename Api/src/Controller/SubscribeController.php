<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\StudentRepository;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\Exception\NotEncodableValueException;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;

class SubscribeController extends AbstractController
{
    /**
     * @Route("/api/user/add", name="api_user_add", methods={"POST"}, options={"expose"=true})
     */
    public function newUser(Request $request): Response
    {
        $data = json_decode($request->getContent(), true);
        $newUser = new User();
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
    }
    
    /**
     * @Route("/api/user/login_check", name="api_user_login_check", methods={"POST"}, options={"expose"=true})
     */
    public function loginCheck(UserRepository $ur, Request $request): Response
    {
        $data = json_decode($request->getContent(), true);
        $user = $ur->findByEmail($data['data']['email']);
        dump(password_verify($data['data']['password'], password_hash($data['data']['password'], PASSWORD_DEFAULT)));
        dump($user[0]['password']);
        return $this->json($ur->findByEmail($data['data']['email']));
// if (password_verify($pass, password_hash($pass, PASSWORD_DEFAULT))
// {
//   echo "Mot de passe correct";
// }
// else
// {
//   echo "Mot de passe incorrect";
// }



        // $newUser = new User();
        // $newUser
        //     ->setUserName($data['data']['user_name'])
        //     ->setEmail($data['data']['email'])
        //     ->setPassword(password_hash($data['data']['password'], PASSWORD_DEFAULT));
        // $entityManager = $this->getDoctrine()->getManager();
        // $entityManager->persist($newUser);
        // $entityManager->flush();

        // return new JsonResponse(
        //     [
        //         'status' => JsonResponse::HTTP_CREATED,
        //         'user' => $newUser
        //     ],
            
        // );
    }



}
