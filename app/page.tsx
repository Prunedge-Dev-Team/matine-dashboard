'use client';

import {
  Badge,
  Box,
  BoxProps,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  Group,
  Image,
  Paper,
  PaperProps,
  SimpleGrid,
  Spoiler,
  Stack,
  Text,
  ThemeIcon,
  ThemeIconProps,
  Title,
  Tooltip,
  UnstyledButton,
} from '@mantine/core';
import Link from 'next/link';
import { PATH_DASHBOARD, PATH_DOCS } from '@/routes';
import {
  IconAdjustmentsHorizontal,
  IconArrowRight,
  IconBook,
  IconColorSwatch,
  IconDevices,
  IconFolderCode,
  IconScaleOutline,
  IconSettingsCog,
} from '@tabler/icons-react';
import CountUp from 'react-countup';
import { useMediaQuery } from '@mantine/hooks';
import GuestLayout from '@/layout/Guest';
import classes from './page.module.css';

const TECH_STACK = [
  { title: 'nextjs', version: '14.0.2', href: 'https://nextjs.org/' },
  { title: 'react', version: '18.2.0', href: 'https://react.dev/' },
  {
    title: 'typescript',
    version: '5.1.6',
    href: 'https://www.typescriptlang.org/',
  },
  { title: 'mantine', version: '7.2.2', href: 'https://mantine.dev/' },
  {
    title: 'tabler icons',
    version: '2.40.0',
    href: 'https://tabler-icons.io/',
  },
  { title: 'tiptap', version: '2.1.12', href: 'https://tiptap.dev/' },
  { title: 'apexcharts', version: '3.44.0', href: 'https://apexcharts.com/' },
  { title: 'dayjs', version: '1.11.10', href: 'https://day.js.org/' },
  { title: 'fullcalendar', version: '6.1.8', href: 'https://fullcalendar.io/' },
  {
    title: 'emotion',
    version: '11.11.1',
    href: 'https://emotion.sh/docs/introduction',
  },
  { title: 'dnd-kit', version: '6.0.8', href: 'https://dndkit.com/' },
  {
    title: 'embla-carousel',
    version: '8.0.0',
    href: 'https://www.embla-carousel.com/',
  },
  {
    title: 'mantine datatable',
    version: '7.1.7',
    href: 'https://icflorescu.github.io/mantine-datatable',
  },
  { title: 'lodash', version: '4.17.21', href: 'https://lodash.com/' },
  {
    title: 'react simple maps',
    version: '3.0.0',
    href: 'https://www.react-simple-maps.io/',
  },
];

const PAPER_PROPS: PaperProps = {
  p: 'md',
  shadow: 'md',
  radius: 'md',
  className: classes.paper,
};

const THEME_ICON_PROPS: Omit<ThemeIconProps, 'children'> = {
  variant: 'light',
  size: 48,
};

const IMAGE_PAPER_PROPS: PaperProps = {
  p: 'md',
  className: classes.image,
};

export default function Home() {
  const tablet_match = useMediaQuery('(max-width: 768px)');

  const BOX_PROPS: BoxProps = {
    mt: 120,
    pb: 80,
    px: tablet_match ? 20 : 48,
  };

  return (
    <>
      <>
        <title>DesignSparx | Website UI Kit</title>
        <meta
          name="description"
          content="Explore our versatile dashboard website template featuring a stunning array of themes and meticulously crafted components. Elevate your web project with seamless integration, customizable themes, and a rich variety of components for a dynamic user experience. Effortlessly bring your data to life with our intuitive dashboard template, designed to streamline development and captivate users. Discover endless possibilities in design and functionality today!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </>
      <GuestLayout>
        <Box className={classes.hero}>
          <Grid>
            <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 2, md: 1 }}>
              <Stack>
                <Text>Build like a Pro</Text>
                <Title className={classes.title}>
                  The simplest and fastest way to build your next{' '}
                  <Text component="span" inherit className={classes.highlight}>
                    Mantine UI{' '}
                  </Text>
                  &{' '}
                  <Text component="span" inherit className={classes.highlight}>
                    Nextjs{' '}
                  </Text>
                  dashboard or app.
                </Title>
                <Text>
                  This template comes with hundreds of UI elements, forms,
                  tables, charts, pages and icons that helps you to create your
                  web apps or applications faster.
                </Text>
                <Group my="lg">
                  <Button
                    component={Link}
                    href={PATH_DASHBOARD.default}
                    size="md"
                    rightSection={<IconArrowRight />}
                  >
                    Live Preview
                  </Button>
                  <Button
                    size="md"
                    component="a"
                    href={PATH_DOCS.root}
                    target="_blank"
                    variant="outline"
                    color="white"
                  >
                    Read Documentation
                  </Button>
                </Group>
                <Stack>
                  <Text fw={700}>Tech Stack:</Text>
                  <Spoiler
                    maxHeight={48}
                    showLabel="Show more"
                    hideLabel="Hide"
                    styles={{ control: { color: 'white', margin: '4px 8px' } }}
                  >
                    <Group pb="sm">
                      {TECH_STACK.map((t) => (
                        <Tooltip
                          key={t.title}
                          label={`${t.title}-${t.version}`}
                        >
                          <UnstyledButton
                            className={classes.stackControl}
                            component="a"
                            href={t.href}
                            target="_blank"
                          >
                            {t.title}
                          </UnstyledButton>
                        </Tooltip>
                      ))}
                    </Group>
                  </Spoiler>
                </Stack>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 1, md: 2 }}>
              <Image src="/thumbnail-img-b.jpg" alt="/" />
            </Grid.Col>
          </Grid>
        </Box>
        <Box {...BOX_PROPS}>
          <Container size="lg">
            <Title ta="center" order={2}>
              Carefully crafted components ready to use in your project
            </Title>
            <SimpleGrid
              my="xl"
              cols={{ base: 1, sm: 1, md: 2, lg: 4 }}
              spacing={{ base: 'sm', sm: 'sm', md: 'sm' }}
              verticalSpacing={{ base: 'sm', sm: 'sm', md: 'sm' }}
            >
              <Paper {...PAPER_PROPS}>
                <Flex
                  align="center"
                  direction={{ base: 'column', sm: 'row' }}
                  gap={{ base: 'sm', sm: 'lg' }}
                  justify={{ sm: 'center' }}
                >
                  <Title className={classes.statsTitle}>
                    <CountUp end={50} />+
                  </Title>
                  <Text>Beautifully coded page examples</Text>
                </Flex>
              </Paper>
              <Paper {...PAPER_PROPS}>
                <Flex
                  align="center"
                  direction={{ base: 'column', sm: 'row' }}
                  gap={{ base: 'sm', sm: 'lg' }}
                  justify={{ sm: 'center' }}
                >
                  <Title className={classes.statsTitle}>
                    <CountUp end={100} />+
                  </Title>
                  <Text>Components and widgets</Text>
                </Flex>
              </Paper>
              <Paper {...PAPER_PROPS}>
                <Flex
                  align="center"
                  direction={{ base: 'column', sm: 'row' }}
                  gap={{ base: 'sm', sm: 'lg' }}
                  justify={{ sm: 'center' }}
                >
                  <IconDevices size={50} className={classes.statsTitle} />
                  <Text>Optimized to work for most devices</Text>
                </Flex>
              </Paper>
              <Paper {...PAPER_PROPS}>
                <Flex
                  align="center"
                  direction={{ base: 'column', sm: 'row' }}
                  gap={{ base: 'sm', sm: 'lg' }}
                  justify={{ sm: 'center' }}
                >
                  <IconColorSwatch size={50} className={classes.statsTitle} />
                  <Text>Customize it to meet your brand's identity</Text>
                </Flex>
              </Paper>
            </SimpleGrid>
          </Container>
          <SimpleGrid
            cols={{ base: 1, sm: 1, md: 2, lg: 3 }}
            spacing={{ base: 'sm', sm: 'sm', md: 'sm', lg: 'lg' }}
            verticalSpacing={{ base: 'sm', sm: 'sm', md: 'sm', lg: 'lg' }}
          >
            <Paper {...IMAGE_PAPER_PROPS}>
              <Image src="/a-dashboard.png" className={classes.variantImg} />
              <Text className={classes.variantTitle}>Default variant</Text>
            </Paper>
            <Paper {...IMAGE_PAPER_PROPS}>
              <Image src="/orders-pink.png" className={classes.variantImg} />
              <Text className={classes.variantTitle}>Pink variant</Text>
            </Paper>
            <Paper {...IMAGE_PAPER_PROPS}>
              <Image src="/tasks-orange.png" className={classes.variantImg} />
              <Text className={classes.variantTitle}>Orange variant</Text>
            </Paper>
            <Paper {...IMAGE_PAPER_PROPS}>
              <Image src="/profile-green.png" className={classes.variantImg} />
              <Text className={classes.variantTitle}>Green variant</Text>
            </Paper>
            <Paper {...IMAGE_PAPER_PROPS}>
              <Image src="/chat-grape.png" className={classes.variantImg} />
              <Text className={classes.variantTitle}>Purple variant</Text>
            </Paper>
            <Paper {...IMAGE_PAPER_PROPS}>
              <Image
                src="/s-dashboard-dark.png"
                className={classes.variantImg}
              />
              <Text className={classes.variantTitle}>Dark variant</Text>
            </Paper>
          </SimpleGrid>
        </Box>
        <Box {...BOX_PROPS}>
          <Container size="lg">
            <Badge size="lg" variant="filled" mb="md">
              Key features
            </Badge>
            <Text mb="lg">
              Quick helps you build beautiful websites that stand out and
              automatically adapt to your style.
            </Text>
            <SimpleGrid
              cols={{ base: 1, sm: 1, md: 2, lg: 4 }}
              spacing={{ base: 'sm', sm: 'sm', md: 'sm', lg: 'lg' }}
              verticalSpacing={{ base: 'sm', sm: 'sm', md: 'sm', lg: 'lg' }}
            >
              <Paper {...PAPER_PROPS}>
                <ThemeIcon {...THEME_ICON_PROPS}>
                  <IconFolderCode size={24} />
                </ThemeIcon>
                <Title order={4} mt="sm" mb={4}>
                  Modular
                </Title>
                <Text fz="sm">
                  All components are built to be used in any combination.
                </Text>
              </Paper>
              <Paper {...PAPER_PROPS}>
                <ThemeIcon {...THEME_ICON_PROPS}>
                  <IconSettingsCog size={24} />
                </ThemeIcon>
                <Title order={4} mt="sm" mb={4}>
                  Responsive
                </Title>
                <Text fz="sm">
                  Quick is optimized to work for most devices.
                </Text>
              </Paper>
              <Paper {...PAPER_PROPS}>
                <ThemeIcon {...THEME_ICON_PROPS}>
                  <IconScaleOutline size={24} />
                </ThemeIcon>
                <Title order={4} mt="sm" mb={4}>
                  Scalable
                </Title>
                <Text fz="sm">
                  Remain consistent while developing new features.
                </Text>
              </Paper>
              <Paper {...PAPER_PROPS}>
                <ThemeIcon {...THEME_ICON_PROPS}>
                  <IconAdjustmentsHorizontal size={24} />
                </ThemeIcon>
                <Title order={4} mt="sm" mb={4}>
                  Customizable
                </Title>
                <Text fz="sm">
                  Change a few variables and the whole theme adapts.
                </Text>
              </Paper>
            </SimpleGrid>
            <Center mt="lg">
              <Button
                size="md"
                component="a"
                href={PATH_DOCS.root}
                target="_blank"
                leftSection={<IconBook size={16} />}
              >
                Read Documentation
              </Button>
            </Center>
          </Container>
        </Box>
        <Box {...BOX_PROPS}>
          <Paper className={classes.contactPaper}>
            <Title order={3} mb="md">
              For any queries?
            </Title>
            <Button
              variant="subtle"
              rightSection={<IconArrowRight size={16} />}
            >
              Contact Us
            </Button>
          </Paper>
        </Box>
      </GuestLayout>
    </>
  );
}
