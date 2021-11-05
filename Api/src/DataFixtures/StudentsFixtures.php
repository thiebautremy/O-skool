<?php

namespace App\DataFixtures;

use App\Entity\Student;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class StudentsFixtures extends Fixture
{
    public function load(ObjectManager $manager)
        {
            $students = [
                0 => [
                    'first_name' => 'tom',
                    'last_name' => 'égérie',
                    'adress' => '3 rue des Chevaliers',
                    'city' => 'Ailleurs',
                    'zipCode' => 52470,
                    'phone' => '0652525252',
                    'email' => 'tomegerie@oskool.fr',
                    'health' => '',
                    'hobbies' => 'course en sac',
                    'class' => 'CM1',
                    'random' => 'Va toujours à la cantine et au périscolaire'
                ],
                1 => [
                    'first_name' => 'vivien',
                    'last_name' => 'chémoi',
                    'adress' => '15 rue des Sardines',
                    'city' => 'Loin',
                    'zipCode' => 45789,
                    'phone' => '0645454545',
                    'email' => 'vivienchemoi@oskool.fr',
                    'health' => 'Allérgie gluten',
                    'hobbies' => 'rugby',
                    'class' => 'CE1',
                    'random' => 'Ne peut pas pratiquer de sport'
                ],
                2 => [
                    'first_name' => 'zackary',
                    'last_name' => 'amablague',
                    'adress' => '155 rue des Mouches',
                    'city' => 'Paris',
                    'zipCode' => 77890,
                    'phone' => '0632323232',
                    'email' => 'zackaryamablague@oskool.fr',
                    'health' => 'Allérgie arachide',
                    'hobbies' => 'cuisine',
                    'class' => 'CE1',
                    'random' => 'Parents divorcés'
                ],
                3 => [
                    'first_name' => 'eva',
                    'last_name' => 'pauré',
                    'adress' => '1 bis avenue George',
                    'city' => 'Ailleurs',
                    'zipCode' => 52470,
                    'phone' => '0612121212',
                    'email' => 'evapaure@oskool.fr',
                    'health' => '',
                    'hobbies' => 'foobtall',
                    'class' => 'CE2',
                    'random' => 'Facilité en Mathématique'
                ],
                4 => [
                    'first_name' => 'maud',
                    'last_name' => 'erateur',
                    'adress' => '12 avenue Michel',
                    'city' => 'Toulouse',
                    'zipCode' => 58950,
                    'phone' => '0602020202',
                    'email' => 'mauderateur@oskool.fr',
                    'health' => '',
                    'hobbies' => 'camping',
                    'class' => 'CP',
                    'random' => 'Caractère difficile'
                ]
            ];

            foreach ($students as $student) {
                $newStudent = new Student();
                $newStudent
                    ->setfirst_name($student['first_name'])
                    ->setlast_name($student['last_name'])
                    ->setAdress($student['adress'])
                    ->setCity($student['city'])
                    ->setZipCode($student['zipCode'])
                    ->setPhone($student['phone'])
                    ->setEmail($student['email'])
                    ->setHealth($student['health'])
                    ->setHobbies($student['hobbies'])
                    ->setClass($student['class'])
                    ->setRandom($student['random']);
    
                $manager->persist($newStudent);
            }
    

            $manager->flush();
        }
}
