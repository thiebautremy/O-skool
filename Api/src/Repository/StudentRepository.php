<?php

namespace App\Repository;

use App\Entity\Student;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;


/**
 * @method Student|null find($id, $lockMode = null, $lockVersion = null)
 * @method Student|null findOneBy(array $criteria, array $orderBy = null)
 * @method Student[]    findAll()
 * @method Student[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StudentRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Student::class);
    }

    public function findAllStudents()
    {
        $entityManager = $this->getEntityManager();

        $query = $entityManager->createQuery('
            SELECT s.id, s.first_name, s.last_name, s.adress, s.city, s.zipCode, s.phone, s.email, s.health, s.hobbies, s.class, s.random
            FROM App\Entity\Student s
        ');        
        
        return $query->getArrayResult();
    }

    public function findById($id)
    {
        $entityManager = $this->getEntityManager();

        $query = $entityManager->createQuery('
            SELECT s.id, s.first_name, s.last_name, s.adress, s.city, s.zipCode, s.phone, s.email, s.health, s.hobbies, s.class, s.random
            FROM App\Entity\Student s
            WHERE s.id = :student_id
        ')
        -> setParameter('student_id', $id);
        
        return $query->getSingleResult();
    }


    // /**
    //  * @return Student[] Returns an array of Student objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Student
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
