<?php

namespace ContainerYaLw52m;
include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'doctrine'.\DIRECTORY_SEPARATOR.'persistence'.\DIRECTORY_SEPARATOR.'lib'.\DIRECTORY_SEPARATOR.'Doctrine'.\DIRECTORY_SEPARATOR.'Persistence'.\DIRECTORY_SEPARATOR.'ObjectManager.php';
include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'doctrine'.\DIRECTORY_SEPARATOR.'orm'.\DIRECTORY_SEPARATOR.'lib'.\DIRECTORY_SEPARATOR.'Doctrine'.\DIRECTORY_SEPARATOR.'ORM'.\DIRECTORY_SEPARATOR.'EntityManagerInterface.php';
include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'doctrine'.\DIRECTORY_SEPARATOR.'orm'.\DIRECTORY_SEPARATOR.'lib'.\DIRECTORY_SEPARATOR.'Doctrine'.\DIRECTORY_SEPARATOR.'ORM'.\DIRECTORY_SEPARATOR.'EntityManager.php';

class EntityManager_9a5be93 extends \Doctrine\ORM\EntityManager implements \ProxyManager\Proxy\VirtualProxyInterface
{
    /**
     * @var \Doctrine\ORM\EntityManager|null wrapped object, if the proxy is initialized
     */
    private $valueHolderf0765 = null;

    /**
     * @var \Closure|null initializer responsible for generating the wrapped object
     */
    private $initializer19d2c = null;

    /**
     * @var bool[] map of public properties of the parent class
     */
    private static $publicProperties46dfd = [
        
    ];

    public function getConnection()
    {
        $this->initializer19d2c && ($this->initializer19d2c->__invoke($valueHolderf0765, $this, 'getConnection', array(), $this->initializer19d2c) || 1) && $this->valueHolderf0765 = $valueHolderf0765;

        return $this->valueHolderf0765->getConnection();
    }

    public function getMetadataFactory()
    {
        $this->initializer19d2c && ($this->initializer19d2c->__invoke($valueHolderf0765, $this, 'getMetadataFactory', array(), $this->initializer19d2c) || 1) && $this->valueHolderf0765 = $valueHolderf0765;

        return $this->valueHolderf0765->getMetadataFactory();
    }

    public function getExpressionBuilder()
    {
        $this->initializer19d2c && ($this->initializer19d2c->__invoke($valueHolderf0765, $this, 'getExpressionBuilder', array(), $this->initializer19d2c) || 1) && $this->valueHolderf0765 = $valueHolderf0765;

        return $this->valueHolderf0765->getExpressionBuilder();
    }

    public function beginTransaction()
    {
        $this->initializer19d2c && ($this->initializer19d2c->__invoke($valueHolderf0765, $this, 'beginTransaction', array(), $this->initializer19d2c) || 1) && $this->valueHolderf0765 = $valueHolderf0765;

        return $this->valueHolderf0765->beginTransaction();
    }

    public function getCache()
    {
        $this->initializer19d2c && ($this->initializer19d2c->__invoke($valueHolderf0765, $this, 'getCache', array(), $this->initializer19d2c) || 1) && $this->valueHolderf0765 = $valueHolderf0765;

        return $this->valueHolderf0765->getCache();
    }

    public function transactional($func)
    {
        $this->initializer19d2c && ($this->initializer19d2c->__invoke($valueHolderf0765, $this, 'transactional', array('func' => $func), $this->initializer19d2c) || 1) && $this->valueHolderf0765 = $valueHolderf0765;

        return $this->valueHolderf0765->transactional($func);
    }

    public function commit()
    {
        $this->initializer19d2c && ($this->initializer19d2c->__invoke($valueHolderf0765, $this, 'commit', array(), $this->initializer19d2c) || 1) && $this->valueHolderf0765 = $valueHolderf0765;

        return $this->valueHolderf0765->commit();
    }

    public function rollback()
    {
        $this->initializer19d2c && ($this->initializer19d2c->__invoke($valueHolderf0765, $this, 'rollback', array(), $this->initializer19d2c) || 1) && $this->valueHolderf0765 = $valueHolderf0765;

        return $this->valueHolderf0765->rollback();
    }

    public function getClassMetadata($className)
    {
        $this->initializer19d2c && ($this->initializer19d2c->__invoke($valueHolderf0765, $this, 'getClassMetadata', array('className' => $className), $this->initializer19d2c) || 1) && $this->valueHolderf0765 = $valueHolderf0765;

        return $this->valueHolderf0765->getClassMetadata($className);
    }

    public function createQuery($dql = '')
    {
        $this->initializer19d2c && ($this->initializer19d2c->__invoke($valueHolderf0765, $this, 'createQuery', array('dql' => $dql), $this->initializer19d2c) || 1) && $this->valueHolderf0765 = $valueHolderf0765;

        return $this->valueHolderf0765->createQuery($dql);
    }

    public function createNamedQuery($name)
    {
        $this->initializer19d2c && ($this->initializer19d2c->__invoke($valueHolderf0765, $this, 'createNamedQuery', array('name' => $name), $this->initializer19d2c) || 1) && $this->valueHolderf0765 = $valueHolderf0765;

        return $this->valueHolderf0765->createNamedQuery($name);
    }

    public function createNativeQuery($sql, \Doctrine\ORM\Query\ResultSetMapping $rsm)
    {
        $this->initializer19d2c && ($this->initializer19d2c->__invoke($valueHolderf0765, $this, 'createNativeQuery', array('sql' => $sql, 'rsm' => $rsm), $this->initializer19d2c) || 1) && $this->valueHolderf0765 = $valueHolderf0765;

        return $this->valueHolderf0765->createNativeQuery($sql, $rsm);
    }

    public function createNamedNativeQuery($name)
    {
        $this->initializer19d2c && ($this->initializer19d2c->__invoke($valueHolderf0765, $this, 'createNamedNativeQuery', array('name' => $name), $this->initializer19d2c) || 1) && $this->valueHolderf0765 = $valueHolderf0765;

        return $this->valueHolderf0765->createNamedNativeQuery($name);
    }

    public function createQueryBuilder()
    {
        $this->initializer19d2c && ($this->initializer19d2c->__invoke($valueHolderf0765, $this, 'createQueryBuilder', array(), $this->initializer19d2c) || 1) && $this->valueHolderf0765 = $valueHolderf0765;

        return $this->valueHolderf0765->createQueryBuilder();
    }

    public function flush($entity = null)
    {
        $this->initializer19d2c && ($this->initializer19d2c->__invoke($valueHolderf0765, $this, 'flush', array('entity' => $entity), $this->initializer19d2c) || 1) && $this->valueHolderf0765 = $valueHolderf0765;

        return $this->valueHolderf0765->flush($entity);
    }

    public function find($className, $id, $lockMode = null, $lockVersion = null)
    {
        $this->initializer19d2c && ($this->initializer19d2c->__invoke($valueHolderf0765, $this, 'find', array('className' => $className, 'id' => $id, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializer19d2c) || 1) && $this->valueHolderf0765 = $valueHolderf0765;

        return $this->valueHolderf0765->find($className, $id, $lockMode, $lockVersion);
    }

    public function getReference($entityName, $id)
    {
        $this->initializer19d2c && ($this->initializer19d2c->__invoke($valueHolderf0765, $this, 'getReference', array('entityName' => $entityName, 'id' => $id), $this->initializer19d2c) || 1) && $this->valueHolderf0765 = $valueHolderf0765;

        return $this->valueHolderf0765->getReference($entityName, $id);
    }

    public function getPartialReference($entityName, $identifier)
    {
        $this->initializer19d2c && ($this->initializer19d2c->__invoke($valueHolderf0765, $this, 'getPartialReference', array('entityName' => $entityName, 'identifier' => $identifier), $this->initializer19d2c) || 1) && $this->valueHolderf0765 = $valueHolderf0765;

        return $this->valueHolderf0765->getPartialReference($entityName, $identifier);
    }

    public function clear($entityName = null)
    {
        $this->initializer19d2c && ($this->initializer19d2c->__invoke($valueHolderf0765, $this, 'clear', array('entityName' => $entityName), $this->initializer19d2c) || 1) && $this->valueHolderf0765 = $valueHolderf0765;

        return $this->valueHolderf0765->clear($entityName);
    }

    public function close()
    {
        $this->initializer19d2c && ($this->initializer19d2c->__invoke($valueHolderf0765, $this, 'close', array(), $this->initializer19d2c) || 1) && $this->valueHolderf0765 = $valueHolderf0765;

        return $this->valueHolderf0765->close();
    }

    public function persist($entity)
    {
        $this->initializer19d2c && ($this->initializer19d2c->__invoke($valueHolderf0765, $this, 'persist', array('entity' => $entity), $this->initializer19d2c) || 1) && $this->valueHolderf0765 = $valueHolderf0765;

        return $this->valueHolderf0765->persist($entity);
    }

    public function remove($entity)
    {
        $this->initializer19d2c && ($this->initializer19d2c->__invoke($valueHolderf0765, $this, 'remove', array('entity' => $entity), $this->initializer19d2c) || 1) && $this->valueHolderf0765 = $valueHolderf0765;

        return $this->valueHolderf0765->remove($entity);
    }

    public function refresh($entity)
    {
        $this->initializer19d2c && ($this->initializer19d2c->__invoke($valueHolderf0765, $this, 'refresh', array('entity' => $entity), $this->initializer19d2c) || 1) && $this->valueHolderf0765 = $valueHolderf0765;

        return $this->valueHolderf0765->refresh($entity);
    }

    public function detach($entity)
    {
        $this->initializer19d2c && ($this->initializer19d2c->__invoke($valueHolderf0765, $this, 'detach', array('entity' => $entity), $this->initializer19d2c) || 1) && $this->valueHolderf0765 = $valueHolderf0765;

        return $this->valueHolderf0765->detach($entity);
    }

    public function merge($entity)
    {
        $this->initializer19d2c && ($this->initializer19d2c->__invoke($valueHolderf0765, $this, 'merge', array('entity' => $entity), $this->initializer19d2c) || 1) && $this->valueHolderf0765 = $valueHolderf0765;

        return $this->valueHolderf0765->merge($entity);
    }

    public function copy($entity, $deep = false)
    {
        $this->initializer19d2c && ($this->initializer19d2c->__invoke($valueHolderf0765, $this, 'copy', array('entity' => $entity, 'deep' => $deep), $this->initializer19d2c) || 1) && $this->valueHolderf0765 = $valueHolderf0765;

        return $this->valueHolderf0765->copy($entity, $deep);
    }

    public function lock($entity, $lockMode, $lockVersion = null)
    {
        $this->initializer19d2c && ($this->initializer19d2c->__invoke($valueHolderf0765, $this, 'lock', array('entity' => $entity, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializer19d2c) || 1) && $this->valueHolderf0765 = $valueHolderf0765;

        return $this->valueHolderf0765->lock($entity, $lockMode, $lockVersion);
    }

    public function getRepository($entityName)
    {
        $this->initializer19d2c && ($this->initializer19d2c->__invoke($valueHolderf0765, $this, 'getRepository', array('entityName' => $entityName), $this->initializer19d2c) || 1) && $this->valueHolderf0765 = $valueHolderf0765;

        return $this->valueHolderf0765->getRepository($entityName);
    }

    public function contains($entity)
    {
        $this->initializer19d2c && ($this->initializer19d2c->__invoke($valueHolderf0765, $this, 'contains', array('entity' => $entity), $this->initializer19d2c) || 1) && $this->valueHolderf0765 = $valueHolderf0765;

        return $this->valueHolderf0765->contains($entity);
    }

    public function getEventManager()
    {
        $this->initializer19d2c && ($this->initializer19d2c->__invoke($valueHolderf0765, $this, 'getEventManager', array(), $this->initializer19d2c) || 1) && $this->valueHolderf0765 = $valueHolderf0765;

        return $this->valueHolderf0765->getEventManager();
    }

    public function getConfiguration()
    {
        $this->initializer19d2c && ($this->initializer19d2c->__invoke($valueHolderf0765, $this, 'getConfiguration', array(), $this->initializer19d2c) || 1) && $this->valueHolderf0765 = $valueHolderf0765;

        return $this->valueHolderf0765->getConfiguration();
    }

    public function isOpen()
    {
        $this->initializer19d2c && ($this->initializer19d2c->__invoke($valueHolderf0765, $this, 'isOpen', array(), $this->initializer19d2c) || 1) && $this->valueHolderf0765 = $valueHolderf0765;

        return $this->valueHolderf0765->isOpen();
    }

    public function getUnitOfWork()
    {
        $this->initializer19d2c && ($this->initializer19d2c->__invoke($valueHolderf0765, $this, 'getUnitOfWork', array(), $this->initializer19d2c) || 1) && $this->valueHolderf0765 = $valueHolderf0765;

        return $this->valueHolderf0765->getUnitOfWork();
    }

    public function getHydrator($hydrationMode)
    {
        $this->initializer19d2c && ($this->initializer19d2c->__invoke($valueHolderf0765, $this, 'getHydrator', array('hydrationMode' => $hydrationMode), $this->initializer19d2c) || 1) && $this->valueHolderf0765 = $valueHolderf0765;

        return $this->valueHolderf0765->getHydrator($hydrationMode);
    }

    public function newHydrator($hydrationMode)
    {
        $this->initializer19d2c && ($this->initializer19d2c->__invoke($valueHolderf0765, $this, 'newHydrator', array('hydrationMode' => $hydrationMode), $this->initializer19d2c) || 1) && $this->valueHolderf0765 = $valueHolderf0765;

        return $this->valueHolderf0765->newHydrator($hydrationMode);
    }

    public function getProxyFactory()
    {
        $this->initializer19d2c && ($this->initializer19d2c->__invoke($valueHolderf0765, $this, 'getProxyFactory', array(), $this->initializer19d2c) || 1) && $this->valueHolderf0765 = $valueHolderf0765;

        return $this->valueHolderf0765->getProxyFactory();
    }

    public function initializeObject($obj)
    {
        $this->initializer19d2c && ($this->initializer19d2c->__invoke($valueHolderf0765, $this, 'initializeObject', array('obj' => $obj), $this->initializer19d2c) || 1) && $this->valueHolderf0765 = $valueHolderf0765;

        return $this->valueHolderf0765->initializeObject($obj);
    }

    public function getFilters()
    {
        $this->initializer19d2c && ($this->initializer19d2c->__invoke($valueHolderf0765, $this, 'getFilters', array(), $this->initializer19d2c) || 1) && $this->valueHolderf0765 = $valueHolderf0765;

        return $this->valueHolderf0765->getFilters();
    }

    public function isFiltersStateClean()
    {
        $this->initializer19d2c && ($this->initializer19d2c->__invoke($valueHolderf0765, $this, 'isFiltersStateClean', array(), $this->initializer19d2c) || 1) && $this->valueHolderf0765 = $valueHolderf0765;

        return $this->valueHolderf0765->isFiltersStateClean();
    }

    public function hasFilters()
    {
        $this->initializer19d2c && ($this->initializer19d2c->__invoke($valueHolderf0765, $this, 'hasFilters', array(), $this->initializer19d2c) || 1) && $this->valueHolderf0765 = $valueHolderf0765;

        return $this->valueHolderf0765->hasFilters();
    }

    /**
     * Constructor for lazy initialization
     *
     * @param \Closure|null $initializer
     */
    public static function staticProxyConstructor($initializer)
    {
        static $reflection;

        $reflection = $reflection ?? new \ReflectionClass(__CLASS__);
        $instance   = $reflection->newInstanceWithoutConstructor();

        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $instance, 'Doctrine\\ORM\\EntityManager')->__invoke($instance);

        $instance->initializer19d2c = $initializer;

        return $instance;
    }

    protected function __construct(\Doctrine\DBAL\Connection $conn, \Doctrine\ORM\Configuration $config, \Doctrine\Common\EventManager $eventManager)
    {
        static $reflection;

        if (! $this->valueHolderf0765) {
            $reflection = $reflection ?? new \ReflectionClass('Doctrine\\ORM\\EntityManager');
            $this->valueHolderf0765 = $reflection->newInstanceWithoutConstructor();
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);

        }

        $this->valueHolderf0765->__construct($conn, $config, $eventManager);
    }

    public function & __get($name)
    {
        $this->initializer19d2c && ($this->initializer19d2c->__invoke($valueHolderf0765, $this, '__get', ['name' => $name], $this->initializer19d2c) || 1) && $this->valueHolderf0765 = $valueHolderf0765;

        if (isset(self::$publicProperties46dfd[$name])) {
            return $this->valueHolderf0765->$name;
        }

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolderf0765;

            $backtrace = debug_backtrace(false, 1);
            trigger_error(
                sprintf(
                    'Undefined property: %s::$%s in %s on line %s',
                    $realInstanceReflection->getName(),
                    $name,
                    $backtrace[0]['file'],
                    $backtrace[0]['line']
                ),
                \E_USER_NOTICE
            );
            return $targetObject->$name;
        }

        $targetObject = $this->valueHolderf0765;
        $accessor = function & () use ($targetObject, $name) {
            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();

        return $returnValue;
    }

    public function __set($name, $value)
    {
        $this->initializer19d2c && ($this->initializer19d2c->__invoke($valueHolderf0765, $this, '__set', array('name' => $name, 'value' => $value), $this->initializer19d2c) || 1) && $this->valueHolderf0765 = $valueHolderf0765;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolderf0765;

            $targetObject->$name = $value;

            return $targetObject->$name;
        }

        $targetObject = $this->valueHolderf0765;
        $accessor = function & () use ($targetObject, $name, $value) {
            $targetObject->$name = $value;

            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();

        return $returnValue;
    }

    public function __isset($name)
    {
        $this->initializer19d2c && ($this->initializer19d2c->__invoke($valueHolderf0765, $this, '__isset', array('name' => $name), $this->initializer19d2c) || 1) && $this->valueHolderf0765 = $valueHolderf0765;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolderf0765;

            return isset($targetObject->$name);
        }

        $targetObject = $this->valueHolderf0765;
        $accessor = function () use ($targetObject, $name) {
            return isset($targetObject->$name);
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = $accessor();

        return $returnValue;
    }

    public function __unset($name)
    {
        $this->initializer19d2c && ($this->initializer19d2c->__invoke($valueHolderf0765, $this, '__unset', array('name' => $name), $this->initializer19d2c) || 1) && $this->valueHolderf0765 = $valueHolderf0765;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolderf0765;

            unset($targetObject->$name);

            return;
        }

        $targetObject = $this->valueHolderf0765;
        $accessor = function () use ($targetObject, $name) {
            unset($targetObject->$name);

            return;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $accessor();
    }

    public function __clone()
    {
        $this->initializer19d2c && ($this->initializer19d2c->__invoke($valueHolderf0765, $this, '__clone', array(), $this->initializer19d2c) || 1) && $this->valueHolderf0765 = $valueHolderf0765;

        $this->valueHolderf0765 = clone $this->valueHolderf0765;
    }

    public function __sleep()
    {
        $this->initializer19d2c && ($this->initializer19d2c->__invoke($valueHolderf0765, $this, '__sleep', array(), $this->initializer19d2c) || 1) && $this->valueHolderf0765 = $valueHolderf0765;

        return array('valueHolderf0765');
    }

    public function __wakeup()
    {
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);
    }

    public function setProxyInitializer(\Closure $initializer = null) : void
    {
        $this->initializer19d2c = $initializer;
    }

    public function getProxyInitializer() : ?\Closure
    {
        return $this->initializer19d2c;
    }

    public function initializeProxy() : bool
    {
        return $this->initializer19d2c && ($this->initializer19d2c->__invoke($valueHolderf0765, $this, 'initializeProxy', array(), $this->initializer19d2c) || 1) && $this->valueHolderf0765 = $valueHolderf0765;
    }

    public function isProxyInitialized() : bool
    {
        return null !== $this->valueHolderf0765;
    }

    public function getWrappedValueHolderValue()
    {
        return $this->valueHolderf0765;
    }
}

if (!\class_exists('EntityManager_9a5be93', false)) {
    \class_alias(__NAMESPACE__.'\\EntityManager_9a5be93', 'EntityManager_9a5be93', false);
}
