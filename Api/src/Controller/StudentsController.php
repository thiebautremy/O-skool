<?php

namespace App\Controller;

use App\Entity\Student;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\StudentRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

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
    public function getStudents(StudentRepository $sr): Response
    {
            return $this->json($sr->findAllStudents());
    }

    /**
     * @Route("/api/studentsList/{id}", name="api_studentsList_detail")
     */
    public function getStudent(StudentRepository $sr, int $id)
    {
        return $this->json($sr->findById($id));
    }

    /**
     * @Route("/api/student/add", name="api_student_add", methods={"POST"}, options={"expose"=true})
     */
    public function newStudent(Request $request): Response
    {
        $data = json_decode($request->getContent(), true);
        $newStudent = new Student();
        $newStudent
            ->setfirst_name($data['data']['first_name'])
            ->setlast_name($data['data']['last_name'])
            ->setAdress($data['data']['adress'])
            ->setCity($data['data']['city'])
            ->setZipCode($data['data']['zip_code'])
            ->setPhone($data['data']['phone'])
            ->setEmail($data['data']['email'])
            ->setHealth($data['data']['health'] ? $data['data']['health'] : '')
            ->setHobbies($data['data']['hobbies'] ? $data['data']['hobbies'] : '')
            ->setClass($data['data']['class'])
            ->setRandom($data['data']['random'] ? $data['data']['random'] : '');
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($newStudent);
        $entityManager->flush();

        return new JsonResponse(
            [
                'status' => JsonResponse::HTTP_CREATED,
                'student' => $newStudent
            ],
            
        );
    }
    
    /**
     * @Route(
     * "/api/studentsList/delete/{id}",
     * name="api_student_delete",
     * methods={"GET"},
     * options={"expose"=true})
     *
     */
    public function deleteStudent(Request $request, StudentRepository $sr, int $id): Response
    {
        $deleteStudent = $sr->find($id);
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->remove($deleteStudent);
        $entityManager->flush();
        return new Response('etudiant supprimé', Response::HTTP_OK);
    }
}
