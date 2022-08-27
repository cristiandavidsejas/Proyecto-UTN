-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-08-2022 a las 07:06:56
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pruebabd`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contacto`
--

CREATE TABLE `contacto` (
  `idContacto` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `correo` varchar(45) NOT NULL,
  `telefono` int(11) NOT NULL,
  `asunto` varchar(45) NOT NULL,
  `mensaje` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nosotros`
--

CREATE TABLE `nosotros` (
  `idNosotros` int(11) NOT NULL,
  `titulo` varchar(45) NOT NULL,
  `cuerpo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

CREATE TABLE `novedades` (
  `id` int(11) NOT NULL,
  `titulo` varchar(45) DEFAULT NULL,
  `subtitulo` varchar(45) DEFAULT NULL,
  `cuerpo` longtext DEFAULT NULL,
  `img_id` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(15, 'La importancia de aprender inglés', 'En la actualidad, saber inglés es fundamental', 'Por lo general, son muchas las razones por las cuales empezar a estudiar inglés, las personas comienzan un curso de inglés porque tienen pensado viajar al exterior, porque quieren potenciar sus capacidades profesionales o simplemente por ser apasionados de los idiomas. Por eso, a continuación te ofrecemos una lista con las principales razones para comenzar un curso de inglés.\r\n\r\nEn la actualidad, el inglés es el idioma más exigido en las compañías y empresas, es por esto que se convirtió en la principal herramienta para ampliar las metas profesionales y personales. En cuanto domines el idioma tendrás acceso a más y mejores oportunidades laborales. \r\n\r\nTambién es un idioma muy importante para mejorar nuestro acceso a la educación. Nos permitirá no sólo estudiar en el extranjero sino también  acceder a información académica como ensayos y textos científicos publicados en inglés. \r\n\r\nEl inglés es el idioma universal y esto se convierte en una razón importante a la hora de comenzar un curso de inglés. Podrás comunicarte sin barreras y en diferente ámbitos,  desde el comercio y las finanzas hasta el ocio, la religión y la cultura.\r\n\r\nHablar inglés te permitirá conocer otras culturas y estilos de vida. Podrás conocer gente nueva alrededor del mundo, comprender sus hábitos y costumbres. Además saber inglés nos ayudará a entender mejor nuestra propia cultura, nuestras costumbres y nuestro idioma. Experiencias enriquecedoras como estas te harán conocerte mejor y crecer como persona. \r\n\r\nEl inglés es el idioma más aprendido como segunda lengua eso nos dice que no es tan difícil como piensas. Por eso, debes decidirte a dar el primer paso y avanzar firme hacia tu meta. Aprendiendo inglés podrás superar tus miedos y aumentar la confianza en ti mismo. \r\n\r\nEstudiar inglés te permitirá expresarte frente a otros de forma fluída, explicar tus ideas sin tropiezos, con orden y claridad. Es decir, aprendiendo el idioma también potenciamos otras habilidades como la creatividad, el razonamiento, la resolución de problemas, etc. \r\n\r\nY por último, planear unas vacaciones en el extranjero es la mejor excusa para comenzar un curso de inglés. Saber expresarte inglés te permitirá viajar por todo el mundo. Además, aprender sobre gramática, vocabulario y las expresiones más utilizadas facilitarán nuestra estancia en el lugar de destino, conoceremos nuevos destinos, personas y culturas. Además, podremos apreciar el uso del idioma en la vida cotidiana, sus acentos y entonaciones.', 'yjpzgyjc8i3qaahdo7af'),
(16, 'aksjhdgbkjsbdfk', 'lkandsflkjn', 'asljdhljkahsbf', 'n6tlael4so05ednpx1g0'),
(17, 'prueba nuevamente', 'aojsbnf', 'aljksndfljkndlknsjdng', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'cristian', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'david', '827ccb0eea8a706c4c34a16891f84e7b');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `contacto`
--
ALTER TABLE `contacto`
  ADD PRIMARY KEY (`idContacto`);

--
-- Indices de la tabla `nosotros`
--
ALTER TABLE `nosotros`
  ADD PRIMARY KEY (`idNosotros`);

--
-- Indices de la tabla `novedades`
--
ALTER TABLE `novedades`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `contacto`
--
ALTER TABLE `contacto`
  MODIFY `idContacto` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `nosotros`
--
ALTER TABLE `nosotros`
  MODIFY `idNosotros` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `novedades`
--
ALTER TABLE `novedades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
