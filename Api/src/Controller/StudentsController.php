<?php

namespace App\Controller;

use App\Entity\Student;
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

class StudentsController extends AbstractController
{
    /**
     * @Route("/api/students", name="students_list")
     */
    public function findAll()
    {
         /** @var StudentRepository */
         $repository = $this->getDoctrine()->getRepository(Student::class);
         $students = $repository->findAll();
        return json_encode( $students );

    }

    /**
     * @Route("/api/studentsList", name="api_studentsList", methods={"GET"})
     */
    public function getStudents(Request $request, StudentRepository $sr): Response
    {
            return $this->json($sr->findAllStudents());
    }

    /**
     * @Route("/api/studentsList/{id}", name="api_studentsList_detail")
     */
    public function getStudent(StudentRepository $sr, Request $request, int $id)
    {
        return $this->json($sr->find($id));
    }

    /**
     * @Route("/api/student/add", name="api_student_add", methods={"POST"}, options={"expose"=true})
     */
    public function newStudent(Request $request): Response
    {
        $data = json_decode($request->getContent(), true);
        dump($data);
        dump($data['data']);
        $newStudent = new Student();
        $newStudent
            ->setfirst_name($data['data']['first_name'])
            ->setlast_name($data['data']['last_name'])
            ->setAdress($data['data']['adress'])
            ->setCity($data['data']['city'])
            ->setZipCode($data['data']['zip_code'])
            ->setPhone($data['data']['phone'])
            ->setEmail($data['data']['email'])
            ->setHealth($data['data']['health'])
            ->setHobbies($data['data']['hobbies'])
            ->setClass($data['data']['class'])
            ->setRandom($data['data']['random']);
        dump($newStudent);
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($newStudent);
        $entityManager->flush();

        // return new Response('Elève ajouté', Response::HTTP_OK);
        return new JsonResponse(
            [
                'status' => JsonResponse::HTTP_CREATED,
                'student' => $newStudent
            ],
            
        );
        // return new JsonResponse(['hearts' => rand(5, 100)]);
    }
    



}
