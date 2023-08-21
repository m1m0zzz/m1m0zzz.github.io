"use client";

// ref: https://chakra-templates.dev/navigation/sidebar

import React, { ReactNode } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Image,
  useColorMode,
  Divider
} from '@chakra-ui/react';
import {
  FiMeh,
  FiImage,
  FiSliders,
  FiMail,
  FiMenu,
  FiSun,
  FiMoon,
  FiTwitter,
  FiInstagram,
  FiPackage
} from 'react-icons/fi';

import { IconType } from 'react-icons';
import { ReactText } from 'react';
import { FaSoundcloud, FaYoutube } from 'react-icons/fa';

interface LinkItemProps {
  name: string;
  icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'About', icon: FiMeh },
  { name: 'Discography', icon: FiImage },
  { name: 'Distribution', icon: FiSliders },
  { name: 'Project', icon: FiPackage },
  { name: 'Contact', icon: FiMail },
];

interface SNSLinkProps {
  label: string;
  link: string;
  icon: IconType;
}

const SNSLinks: SNSLinkProps[] = [
  { label: 'SoundCloud', link: 'https://soundcloud.com/mimozzz', icon: FaSoundcloud },
  { label: 'Twitter', link: 'https://twitter.com/m1m0zzz', icon: FiTwitter },
  { label: 'YouTube', link: 'https://www.youtube.com/channel/UCgfte7zixiGJ6ZC6ttu3kfg', icon: FaYoutube },
  { label: 'Instagram', link: 'https://www.instagram.com/m1m0zzz/', icon: FiInstagram }
];

export default function SimpleSidebar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }}>
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Image
          src='logo.png'
          alt='mimoz logo'
          height='full'
        />
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} anchor={link.name} icon={link.icon} onClick={onClose}>
          {link.name}
        </NavItem>
      ))}

      <Divider mx={4} my={2} width="calc(100% - 2rem)" />
      <Flex mx={4} alignItems="center">
        <IconButton
          p="4"
          variant="outline"
          onClick={toggleColorMode}
          aria-label="change color mode"
          icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
        />
        <Flex w="full" justifyContent="space-around">
          {SNSLinks.map((link) => (
            <Link
              key={link.label}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              h={4}
              >
              <Icon boxSize={4} as={link.icon} />
            </Link>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  anchor: string;
  icon: IconType;
  onClick: () => void;
  children: ReactText;
}
const NavItem = ({ anchor, icon, children, onClick, ...rest }: NavItemProps) => {
  return (
    <Link
      href={ '#' + anchor.toLowerCase() }
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
      onClick={onClick}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: useColorModeValue("brand.500", "brand.700"),
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Image
        src='logo.png'
        alt='mimoz logo'
        height='full'
        ml={4}
      />
    </Flex>
  );
};