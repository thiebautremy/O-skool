<?php

namespace ContainerYaLw52m;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class get_ServiceLocator_470qnw1Service extends App_KernelDevDebugContainer
{
    /**
     * Gets the private '.service_locator.470qnw1' shared service.
     *
     * @return \Symfony\Component\DependencyInjection\ServiceLocator
     */
    public static function do($container, $lazyLoad = true)
    {
        return $container->privates['.service_locator.470qnw1'] = new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($container->getService, [
            'sr' => ['privates', 'App\\Repository\\StudentRepository', 'getStudentRepositoryService', true],
        ], [
            'sr' => 'App\\Repository\\StudentRepository',
        ]);
    }
}