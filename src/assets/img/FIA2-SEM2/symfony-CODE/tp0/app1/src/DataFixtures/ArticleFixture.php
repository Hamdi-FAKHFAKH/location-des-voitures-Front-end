<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Article;

class ArticleFixture extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $article=new Article();
        
            $article->setTitre("article 1");
            $article->setContenu('"<p>Le contenu de l\'article n° 1 </p>")');
            $manager->persist($article);
            $manager->flush();
           
       
        $article->setTitre("article 1");
        $article->setContenu('"<p>Le contenu de l\'article n° 5 </p>")');
        $manager->persist($article);
        $manager->flush();
    }
}
