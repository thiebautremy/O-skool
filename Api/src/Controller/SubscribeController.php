<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\StudentRepository;
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
        $newUser = new User();
        $newUser
            ->setUserName($request->get('user_name'))
            ->setEmail($request->get('email'))
            ->setPassword($request->get('password'));
        dump($newUser);
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
    



}
