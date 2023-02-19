-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 19, 2023 at 05:55 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `assignment`
--

-- --------------------------------------------------------

--
-- Table structure for table `order_details`
--

CREATE TABLE `order_details` (
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `sku` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_category` varchar(255) NOT NULL,
  `qty` varchar(255) NOT NULL,
  `shipping_type` varchar(255) NOT NULL,
  `total_amount` decimal(10,2) NOT NULL,
  `customer_name` varchar(255) NOT NULL,
  `dob` date NOT NULL,
  `phone` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `order_details`
--

INSERT INTO `order_details` (`order_id`, `product_id`, `sku`, `product_name`, `product_category`, `qty`, `shipping_type`, `total_amount`, `customer_name`, `dob`, `phone`) VALUES
(1, 1, 1234, 'washishing machine', 'electronice', '15', 'online', '123456.00', 'Raghav', '2022-12-05', 9876543217),
(2, 1, 1234, 'iron', 'electronice', '10', 'online', '123456.00', 'Pankaj', '2022-12-10', 9876543217),
(11, 111, 45, 'cloth', 'cloth', '1', 'online', '1425.00', 'Ashish', '2023-02-19', 4717845825),
(15, 223, 3221, 'oats', 'Grocery', '10', 'online', '2345.00', 'Ravi', '2023-01-11', 9285748595);

-- --------------------------------------------------------

--
-- Table structure for table `product_master`
--

CREATE TABLE `product_master` (
  `id` int(11) NOT NULL,
  `category` varchar(255) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `sku` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `discount` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product_master`
--

INSERT INTO `product_master` (`id`, `category`, `product_name`, `sku`, `description`, `price`, `discount`) VALUES
(1, 'Electronics', 'Washing Machine', 452, 'for 7.5 ltr capacity', '1500.00', '10.00'),
(2, 'Electronics', 'Air Conditionar', 455, 'Air Conditionar 3 tonnes', '3500.00', '10.00'),
(3, 'Electronic', 'Refrigrator', 459, 'Refrigerator 500L', '4000.00', '10.00'),
(4, 'Cosmatics', 'Shaving Cream', 659, 'Gillet', '40.00', '7.00'),
(5, 'Cosmatics', 'Razor', 658, 'Gillet', '45.00', '10.00'),
(6, 'Clothing', 'Trouser', 789, 'Trouser Denim', '26.00', '5.00'),
(7, 'Clothing', 'Woven Shirt', 1236, 'Woven Shirt ', '12.00', '10.00'),
(8, 'Medicines', 'Aspirin 15mg', 990, 'Aspirin 15mg', '5.50', '5.00'),
(9, 'Medicines', 'VCure 30 mg', 991, 'VCure 30 mg', '7.40', '5.00');

-- --------------------------------------------------------

--
-- Table structure for table `shipping`
--

CREATE TABLE `shipping` (
  `shipping_id` int(11) NOT NULL,
  `shipping_type` varchar(255) NOT NULL,
  `shipping_charges` decimal(10,2) NOT NULL,
  `total_amount` decimal(10,2) NOT NULL,
  `estimated_delivery` date NOT NULL,
  `recive_status` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `order_details`
--
ALTER TABLE `order_details`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `product_master`
--
ALTER TABLE `product_master`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shipping`
--
ALTER TABLE `shipping`
  ADD PRIMARY KEY (`shipping_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `order_details`
--
ALTER TABLE `order_details`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `product_master`
--
ALTER TABLE `product_master`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
