CREATE DATABASE  IF NOT EXISTS `subarashiimanga` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `subarashiimanga`;
-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: subarashiimanga
-- ------------------------------------------------------
-- Server version	8.0.41

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `generos`
--

DROP TABLE IF EXISTS `generos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `generos` (
  `idgenero` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idgenero`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `generos`
--

LOCK TABLES `generos` WRITE;
/*!40000 ALTER TABLE `generos` DISABLE KEYS */;
/*!40000 ALTER TABLE `generos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manga_has_generos`
--

DROP TABLE IF EXISTS `manga_has_generos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `manga_has_generos` (
  `idmanga` int DEFAULT NULL,
  `idgenero` int DEFAULT NULL,
  KEY `idmanga` (`idmanga`),
  KEY `idgenero` (`idgenero`),
  CONSTRAINT `manga_has_generos_ibfk_1` FOREIGN KEY (`idmanga`) REFERENCES `mangas` (`idmanga`),
  CONSTRAINT `manga_has_generos_ibfk_2` FOREIGN KEY (`idgenero`) REFERENCES `generos` (`idgenero`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manga_has_generos`
--

LOCK TABLES `manga_has_generos` WRITE;
/*!40000 ALTER TABLE `manga_has_generos` DISABLE KEYS */;
/*!40000 ALTER TABLE `manga_has_generos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mangas`
--

DROP TABLE IF EXISTS `mangas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mangas` (
  `idmanga` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) DEFAULT NULL,
  `sinopse` longtext,
  `escrito_por` varchar(255) DEFAULT NULL,
  `publicado_por` varchar(255) DEFAULT NULL,
  `lancamento` varchar(255) DEFAULT NULL,
  `n_volumes` int DEFAULT NULL,
  `splash` blob,
  PRIMARY KEY (`idmanga`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mangas`
--

LOCK TABLES `mangas` WRITE;
/*!40000 ALTER TABLE `mangas` DISABLE KEYS */;
INSERT INTO `mangas` VALUES (1,'xxxHolic','xxxHolic acompanha Kimihiro Watanuki, um jovem atormentado por espíritos que só ele pode ver. Ao entrar por acaso na misteriosa loja da enigmática Yuuko Ichihara, ele se vê envolvido em casos sobrenaturais e lições espirituais profundas, trabalhando em troca de sua liberdade. Um mangá que mistura misticismo, humor e reflexões sobre desejos e destino.','Clamp','Young Magazine','de 2003 a 2007',23,_binary 'xxxHolic.png'),(2,'Sailor Moon','Sailor Moon conta a história de Usagi Tsukino, uma adolescente desastrada que descobre ser uma guerreira mágica destinada a proteger a Terra das forças do mal. Ao lado de outras Sailor Guardians, ela enfrenta inimigos sombrios, vive romances e aprende sobre amizade, coragem e seu verdadeiro destino como princesa da Lua.','Naoko Takeushi','Kodansha','de 1991 a 1997',18,_binary 'sailor-moon.png'),(3,'Fullmetal Alchemist','Fullmetal Alchemist acompanha os irmãos Edward e Alphonse Elric, alquimistas que quebraram um tabu ao tentar ressuscitar sua mãe. Após a tentativa falha, embarcam em uma jornada em busca da Pedra Filosofal para restaurar seus corpos. A trama mistura ação, política e filosofia, explorando sacrifícios, ética e o preço do poder.','Hiromu Arakawa','Enix','de 2001 a 2010',27,_binary 'fullmetal.png'),(4,'Kuroshitsuji','Kuroshitsuji narra a história de Ciel Phantomhive, um jovem conde inglês que faz um pacto com Sebastian, um mordomo demoníaco, em busca de vingança por sua família. Enquanto resolvem crimes na Londres vitoriana, segredos sombrios emergem. Misturando mistério, ação e elementos sobrenaturais, o mangá explora lealdade, dor e a natureza do poder','Yana Tobosu','Square Enix','de 2006 aos dias atuais',34,_binary 'kuroshitsuji.png'),(5,'Pandora Hearts','Pandora Hearts segue Oz Vessalius, herdeiro de uma nobre família, que é lançado ao misterioso Abismo durante sua cerimônia de maioridade. Lá, forma um contrato com a poderosa Alice, uma \"Chain\" em busca de suas memórias. Envolvido em conspirações e segredos do passado, Oz mergulha em um mundo sombrio repleto de mistério, magia e destino.','Jun Mochizuki','Square Enix','de 2006 a 2015',24,_binary 'pandora-hearts.png'),(6,'InuYasha','Inuyasha conta a história de Kagome, uma adolescente do presente que é transportada ao Japão feudal, onde conhece Inuyasha, um meio-youkai em busca da Joia de Quatro Almas. Juntos, enfrentam demônios e inimigos poderosos enquanto reúnem os fragmentos da joia. A trama mistura ação, romance, mitologia e viagens entre mundos.','Rumiko Takahashi','Shogakukan','de 1996 a 2008',56,_binary 'inuyasha.png'),(7,'Paradise Kiss','Paradise Kiss acompanha Yukari Hayasaka, uma estudante exemplar que vê sua vida mudar ao conhecer um grupo de excêntricos estudantes de moda. Ao se tornar modelo para o projeto deles, ela mergulha no mundo da arte, autodescoberta e amores intensos. Um mangá sobre identidade, escolhas e o confronto entre expectativas e desejos pessoais.','Ai Yazawa','Shodensha','de 1999 a 2003',5,_binary 'paradise-kiss.png'),(8,'Puella Magi Madoka Magica','Madoka Magica apresenta Madoka Kaname, uma garota comum que recebe a proposta de se tornar uma garota mágica e combater criaturas malignas. Ao lado de outras garotas, ela descobre que o heroísmo tem um custo terrível. Com uma narrativa sombria e emocional, o mangá desconstrói o gênero mahou shoujo com profundidade e tragédia.','Gen Urobuchi','Houbunsha','junho de 2012',3,_binary 'madoka.png');
/*!40000 ALTER TABLE `mangas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `volumes`
--

DROP TABLE IF EXISTS `volumes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `volumes` (
  `idvolume` int NOT NULL AUTO_INCREMENT,
  `numero` int DEFAULT NULL,
  `sinopse` longtext,
  `idmanga` int DEFAULT NULL,
  PRIMARY KEY (`idvolume`),
  KEY `idmanga` (`idmanga`),
  CONSTRAINT `volumes_ibfk_1` FOREIGN KEY (`idmanga`) REFERENCES `mangas` (`idmanga`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `volumes`
--

LOCK TABLES `volumes` WRITE;
/*!40000 ALTER TABLE `volumes` DISABLE KEYS */;
/*!40000 ALTER TABLE `volumes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-23  8:07:59
