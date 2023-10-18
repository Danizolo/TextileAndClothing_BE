-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 18, 2023 at 03:03 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `textile_and_clothing`
--

-- --------------------------------------------------------

--
-- Table structure for table `all_products`
--

CREATE TABLE `all_products` (
  `ID` int(11) NOT NULL,
  `PRODUCT_ID` int(22) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `all_products`
--

INSERT INTO `all_products` (`ID`, `PRODUCT_ID`, `createdAt`, `updatedAt`) VALUES
(1, 1, '2023-10-18 12:06:20', '2023-10-18 12:06:20'),
(2, 2, '2023-10-18 12:06:20', '2023-10-18 12:06:20'),
(3, 3, '2023-10-18 12:06:20', '2023-10-18 12:06:20');

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `BRAND_ID` int(11) NOT NULL,
  `BRAND_NAME` varchar(55) NOT NULL,
  `MANUFACTURER_TABLE_ID` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`BRAND_ID`, `BRAND_NAME`, `MANUFACTURER_TABLE_ID`, `createdAt`, `updatedAt`) VALUES
(1, 'Otto', 1, '2023-10-14 16:42:55', '2023-10-14 16:42:55'),
(2, 'Nike', 2, '2023-10-14 16:42:55', '2023-10-14 16:42:55');

-- --------------------------------------------------------

--
-- Table structure for table `colors`
--

CREATE TABLE `colors` (
  `COLOR_ID` int(11) NOT NULL,
  `DEFAULT_COLOR` varchar(55) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `colors`
--

INSERT INTO `colors` (`COLOR_ID`, `DEFAULT_COLOR`, `createdAt`, `updatedAt`) VALUES
(1, 'Red', '2023-10-14 15:02:56', '2023-10-14 15:02:56'),
(2, 'Green', '2023-10-14 15:02:56', '2023-10-14 15:02:56'),
(3, 'Navy Blue', '2023-10-14 16:38:05', '2023-10-14 16:38:05'),
(4, 'Black', '2023-10-14 16:38:05', '2023-10-14 16:38:05'),
(5, 'Brown', '2023-10-14 16:38:05', '2023-10-14 16:38:05');

-- --------------------------------------------------------

--
-- Table structure for table `login_histories`
--

CREATE TABLE `login_histories` (
  `LOGIN_HISTORY_ID` int(11) NOT NULL,
  `USER_ID` int(11) NOT NULL,
  `DATE` date NOT NULL,
  `LOGIN_AT` time DEFAULT NULL,
  `LOGOUT_AT` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `login_histories`
--

INSERT INTO `login_histories` (`LOGIN_HISTORY_ID`, `USER_ID`, `DATE`, `LOGIN_AT`, `LOGOUT_AT`, `createdAt`, `updatedAt`) VALUES
(1, 2, '2023-10-18', '10:13:00', NULL, '2023-10-18 04:43:45', '2023-10-18 04:43:45'),
(2, 2, '2023-10-18', '10:14:00', NULL, '2023-10-18 04:44:04', '2023-10-18 04:44:04'),
(3, 2, '2023-10-18', '10:14:00', NULL, '2023-10-18 04:44:47', '2023-10-18 04:44:47'),
(4, 2, '2023-10-18', '10:16:00', NULL, '2023-10-18 04:46:26', '2023-10-18 04:46:26'),
(5, 2, '2023-10-18', '10:17:00', NULL, '2023-10-18 04:47:23', '2023-10-18 04:47:23'),
(6, 2, '2023-10-18', '10:23:00', NULL, '2023-10-18 04:53:15', '2023-10-18 04:53:15'),
(7, 2, '2023-10-18', '11:58:00', NULL, '2023-10-18 06:28:03', '2023-10-18 06:28:03'),
(8, 2, '2023-10-18', '12:11:00', NULL, '2023-10-18 06:41:48', '2023-10-18 06:41:48');

-- --------------------------------------------------------

--
-- Table structure for table `manufacturers`
--

CREATE TABLE `manufacturers` (
  `MANUFACTURER_ID` int(11) NOT NULL,
  `MANUFACTURER_NAME` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `manufacturers`
--

INSERT INTO `manufacturers` (`MANUFACTURER_ID`, `MANUFACTURER_NAME`, `createdAt`, `updatedAt`) VALUES
(1, 'Toray Corporation', '2023-10-15 13:03:39', '2023-10-15 13:03:39'),
(2, 'Eden Textiles', '2023-10-15 13:03:39', '2023-10-15 13:03:39');

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `PERMISSION_ID` int(11) NOT NULL,
  `NAME` varchar(55) DEFAULT NULL,
  `IS_ACTIVE` tinyint(4) DEFAULT 1,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`PERMISSION_ID`, `NAME`, `IS_ACTIVE`, `createdAt`, `updatedAt`) VALUES
(1, 'Display Product', 1, '2023-10-14 12:10:30', '2023-10-14 12:10:30'),
(2, 'Edit cart', 1, '2023-10-14 12:10:30', '2023-10-14 12:10:30'),
(3, 'Edit Profile', 1, '2023-10-14 12:10:49', '2023-10-14 12:10:49'),
(4, 'Delete User', 1, '2023-10-14 12:10:49', '2023-10-14 12:10:49'),
(5, 'Show Payment Details', 1, '2023-10-14 12:11:13', '2023-10-14 12:11:13'),
(6, 'All', 1, '2023-10-14 12:11:13', '2023-10-14 12:11:13');

-- --------------------------------------------------------

--
-- Table structure for table `prices`
--

CREATE TABLE `prices` (
  `PRICE_ID` int(11) NOT NULL,
  `BRAND_ID` int(11) NOT NULL,
  `MANUFACTURER_ID` int(11) NOT NULL,
  `BASE_PRICE` float NOT NULL,
  `PROFIT_PERCENTAGE` float NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `prices`
--

INSERT INTO `prices` (`PRICE_ID`, `BRAND_ID`, `MANUFACTURER_ID`, `BASE_PRICE`, `PROFIT_PERCENTAGE`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, 448.5, 38, '2023-10-15 13:29:37', '2023-10-15 13:29:37'),
(2, 2, 1, 478.98, 27.5, '2023-10-15 13:29:37', '2023-10-15 13:29:37'),
(4, 1, 2, 533.5, 25.5, '2023-10-15 15:43:35', '2023-10-15 15:43:35');

-- --------------------------------------------------------

--
-- Table structure for table `product_colors`
--

CREATE TABLE `product_colors` (
  `ID` int(11) NOT NULL,
  `SHIRT_TABLE_ID` int(11) NOT NULL,
  `COLOR_TABLE_ID` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product_colors`
--

INSERT INTO `product_colors` (`ID`, `SHIRT_TABLE_ID`, `COLOR_TABLE_ID`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, '2023-10-15 05:25:19', '2023-10-15 05:25:19'),
(2, 1, 2, '2023-10-15 05:25:19', '2023-10-15 05:25:19'),
(3, 1, 3, '2023-10-15 05:25:19', '2023-10-15 05:25:19'),
(4, 2, 2, '2023-10-15 05:25:19', '2023-10-15 05:25:19'),
(5, 2, 5, '2023-10-15 05:25:19', '2023-10-15 05:25:19'),
(6, 1, 5, '2023-10-15 05:25:19', '2023-10-15 05:25:19');

-- --------------------------------------------------------

--
-- Table structure for table `product_images`
--

CREATE TABLE `product_images` (
  `PRODUCT_IMAGE_ID` int(11) NOT NULL,
  `PRODUCT_ID` int(11) NOT NULL,
  `COLOR_ID` int(11) NOT NULL,
  `IMG_NAME` varchar(55) NOT NULL,
  `createdAt` timestamp NULL DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product_images`
--

INSERT INTO `product_images` (`PRODUCT_IMAGE_ID`, `PRODUCT_ID`, `COLOR_ID`, `IMG_NAME`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, 'img1.jpg', '2023-10-18 11:59:32', '2023-10-18 07:59:32'),
(2, 1, 1, 'img2.jpg', '2023-10-18 11:59:32', '2023-10-18 07:59:32'),
(3, 1, 1, 'img3.jpg', '2023-10-18 11:59:32', '2023-10-18 07:59:32'),
(4, 1, 1, 'img4.jpg', '2023-10-18 11:59:32', '2023-10-18 07:59:32'),
(5, 1, 1, 'img5.jpg', '2023-10-18 11:59:32', '2023-10-18 07:59:32'),
(6, 1, 1, 'img6.jpg', '2023-10-18 11:59:32', '2023-10-18 07:59:32');

-- --------------------------------------------------------

--
-- Table structure for table `product_sizes`
--

CREATE TABLE `product_sizes` (
  `ID` int(11) NOT NULL,
  `SHIRT_TABLE_ID` int(11) NOT NULL,
  `SIZE_TABLE_ID` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product_sizes`
--

INSERT INTO `product_sizes` (`ID`, `SHIRT_TABLE_ID`, `SIZE_TABLE_ID`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, '2023-10-15 05:26:13', '2023-10-15 05:26:13'),
(2, 1, 2, '2023-10-15 05:26:13', '2023-10-15 05:26:13'),
(3, 1, 3, '2023-10-15 05:26:13', '2023-10-15 05:26:13'),
(4, 1, 5, '2023-10-15 05:26:13', '2023-10-15 05:26:13');

-- --------------------------------------------------------

--
-- Table structure for table `shirts`
--

CREATE TABLE `shirts` (
  `SHIRT_ID` int(11) NOT NULL,
  `BRAND_TABLE_ID` int(11) NOT NULL,
  `NAME` varchar(255) NOT NULL,
  `TYPE` varchar(55) DEFAULT NULL,
  `MATERIAL` varchar(55) DEFAULT NULL,
  `SLEEVE` varchar(55) DEFAULT NULL,
  `FIT` varchar(55) DEFAULT NULL,
  `QUANTITY` int(11) NOT NULL,
  `CREATED_BY` int(11) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `shirts`
--

INSERT INTO `shirts` (`SHIRT_ID`, `BRAND_TABLE_ID`, `NAME`, `TYPE`, `MATERIAL`, `SLEEVE`, `FIT`, `QUANTITY`, `CREATED_BY`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'Solid Mens fashion shirt', 'Casual', 'Cotton', 'Full Sleeve', 'Slim Fit', 13, 1, '2023-10-14 17:34:55', '2023-10-14 16:09:13'),
(2, 2, 'Solid Outfit For Mens', 'Casual', 'Fabric Cotton', 'Full Sleeve', 'Slim Fit', 7, 1, '2023-10-14 17:34:55', '2023-10-14 16:09:13'),
(3, 1, 'Mens Royal casual wear', 'Casual', 'Fabric Cotton', 'Full Sleeve', 'Atheletic', 9, 1, '2023-10-14 17:34:55', '2023-10-14 16:09:13');

-- --------------------------------------------------------

--
-- Table structure for table `sizes`
--

CREATE TABLE `sizes` (
  `SIZE_ID` int(11) NOT NULL,
  `DEFAULT_SIZE` varchar(5) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sizes`
--

INSERT INTO `sizes` (`SIZE_ID`, `DEFAULT_SIZE`, `createdAt`, `updatedAt`) VALUES
(1, 'S', '2023-10-14 16:34:12', '2023-10-14 16:34:12'),
(2, 'M', '2023-10-14 16:34:12', '2023-10-14 16:34:12'),
(3, 'L', '2023-10-14 16:34:12', '2023-10-14 16:34:12'),
(4, 'XL', '2023-10-14 16:34:12', '2023-10-14 16:34:12'),
(5, 'XXL', '2023-10-14 16:34:12', '2023-10-14 16:34:12');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `USER_ID` int(11) NOT NULL,
  `NAME` text DEFAULT NULL,
  `PASSWORD` varchar(15) DEFAULT NULL,
  `CURRENT_PASSWORD` varchar(15) DEFAULT NULL,
  `MAIL` text DEFAULT NULL,
  `PHONE_NUMBER` int(11) DEFAULT NULL,
  `AGE` tinyint(4) DEFAULT NULL,
  `AADHAR` int(11) DEFAULT NULL,
  `USER_TYPE` tinyint(4) DEFAULT NULL,
  `IS_ADMIN` tinyint(4) DEFAULT NULL,
  `IS_ACTIVE` tinyint(4) DEFAULT 1,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`USER_ID`, `NAME`, `PASSWORD`, `CURRENT_PASSWORD`, `MAIL`, `PHONE_NUMBER`, `AGE`, `AADHAR`, `USER_TYPE`, `IS_ADMIN`, `IS_ACTIVE`, `createdAt`, `updatedAt`) VALUES
(1, 'Muthudhanush PJ', 'Dhanush@1999', 'Dhanush@1999', 'dhanush@gmail.com', 9948588, 23, 866986439, 2, 0, 1, '2023-10-14 11:52:41', '2023-10-14 11:52:41'),
(2, 'Manibharathi ', 'Bharathi@23', 'Bharathi@23', 'manibharathi@gmail.com', 464, 23, 454354, 3, 0, 1, '2023-10-14 11:52:41', '2023-10-14 11:52:41'),
(3, 'Thanthoni', 'Thanthoni@23', 'Thanthoni@23', 'thanthoni@gmail.com', 38374, 23, 4646, 3, 0, 1, '2023-10-14 11:52:41', '2023-10-14 11:52:41'),
(4, 'Master Admin', 'Admin@23', 'Admin@1999', 'admin@gmail.com', 4545, 23, 4545, 1, 1, 1, '2023-10-14 11:52:41', '2023-10-14 11:52:41');

-- --------------------------------------------------------

--
-- Table structure for table `user_permissions`
--

CREATE TABLE `user_permissions` (
  `USER_PERMISSION_ID` int(11) NOT NULL,
  `USER_TABLE_ID` int(11) DEFAULT NULL,
  `PERMISSION_TABLE_ID` int(11) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_permissions`
--

INSERT INTO `user_permissions` (`USER_PERMISSION_ID`, `USER_TABLE_ID`, `PERMISSION_TABLE_ID`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, '2023-10-14 12:01:37', '2023-10-14 12:01:37'),
(2, 1, 5, '2023-10-14 12:01:37', '2023-10-14 12:01:37'),
(3, 1, 2, '2023-10-14 12:01:53', '2023-10-14 12:01:53'),
(4, 2, 5, '2023-10-14 12:01:53', '2023-10-14 12:01:53'),
(5, 3, 3, '2023-10-14 12:02:09', '2023-10-14 12:02:09'),
(6, 3, 2, '2023-10-14 12:02:09', '2023-10-14 12:02:09'),
(7, 4, 6, '2023-10-14 12:02:27', '2023-10-14 12:02:27'),
(8, 2, 1, '2023-10-14 12:02:27', '2023-10-14 12:02:27'),
(9, 2, 4, '2023-10-14 12:01:53', '2023-10-14 12:01:53'),
(10, 3, 4, '2023-10-14 12:02:09', '2023-10-14 12:02:09');

-- --------------------------------------------------------

--
-- Table structure for table `user_sessions`
--

CREATE TABLE `user_sessions` (
  `USER_SESSION_ID` int(11) NOT NULL,
  `USER_ID` int(11) NOT NULL,
  `IS_LOGGING_IN` tinyint(4) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_sessions`
--

INSERT INTO `user_sessions` (`USER_SESSION_ID`, `USER_ID`, `IS_LOGGING_IN`, `createdAt`, `updatedAt`) VALUES
(1, 1, 0, '2023-10-16 06:07:44', '2023-10-16 06:07:44'),
(2, 2, 1, '2023-10-16 06:07:44', '2023-10-18 06:41:48'),
(3, 3, 0, '2023-10-16 06:07:56', '2023-10-16 06:07:56'),
(4, 4, 0, '2023-10-16 06:07:56', '2023-10-16 06:07:56');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `all_products`
--
ALTER TABLE `all_products`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`BRAND_ID`);

--
-- Indexes for table `colors`
--
ALTER TABLE `colors`
  ADD PRIMARY KEY (`COLOR_ID`);

--
-- Indexes for table `login_histories`
--
ALTER TABLE `login_histories`
  ADD PRIMARY KEY (`LOGIN_HISTORY_ID`);

--
-- Indexes for table `manufacturers`
--
ALTER TABLE `manufacturers`
  ADD PRIMARY KEY (`MANUFACTURER_ID`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`PERMISSION_ID`);

--
-- Indexes for table `prices`
--
ALTER TABLE `prices`
  ADD PRIMARY KEY (`PRICE_ID`);

--
-- Indexes for table `product_colors`
--
ALTER TABLE `product_colors`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `product_images`
--
ALTER TABLE `product_images`
  ADD PRIMARY KEY (`PRODUCT_IMAGE_ID`);

--
-- Indexes for table `product_sizes`
--
ALTER TABLE `product_sizes`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `shirts`
--
ALTER TABLE `shirts`
  ADD PRIMARY KEY (`SHIRT_ID`);

--
-- Indexes for table `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`SIZE_ID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`USER_ID`);

--
-- Indexes for table `user_permissions`
--
ALTER TABLE `user_permissions`
  ADD PRIMARY KEY (`USER_PERMISSION_ID`);

--
-- Indexes for table `user_sessions`
--
ALTER TABLE `user_sessions`
  ADD PRIMARY KEY (`USER_SESSION_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `all_products`
--
ALTER TABLE `all_products`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `BRAND_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `colors`
--
ALTER TABLE `colors`
  MODIFY `COLOR_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `login_histories`
--
ALTER TABLE `login_histories`
  MODIFY `LOGIN_HISTORY_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `manufacturers`
--
ALTER TABLE `manufacturers`
  MODIFY `MANUFACTURER_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `PERMISSION_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `prices`
--
ALTER TABLE `prices`
  MODIFY `PRICE_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `product_colors`
--
ALTER TABLE `product_colors`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `product_images`
--
ALTER TABLE `product_images`
  MODIFY `PRODUCT_IMAGE_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `product_sizes`
--
ALTER TABLE `product_sizes`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `shirts`
--
ALTER TABLE `shirts`
  MODIFY `SHIRT_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `sizes`
--
ALTER TABLE `sizes`
  MODIFY `SIZE_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `USER_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user_permissions`
--
ALTER TABLE `user_permissions`
  MODIFY `USER_PERMISSION_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `user_sessions`
--
ALTER TABLE `user_sessions`
  MODIFY `USER_SESSION_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
