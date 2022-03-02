import Head from 'next/head';
import { Layout, SignupForm } from '../components';
import { Space, Paper, Text, Title, LoadingOverlay } from '@mantine/core';
import { useUser } from '../hooks';

export default function ProfilePage() {
  const { data, loading, error } = useUser();

  const renderUserInfo = () => {
    if (error) {
      return <Text color="red">Error: {error}</Text>;
    }

    return data?.user?.email ? (
      <>
        <Text size="md">{`Email: ${data?.user?.email}`}</Text>
        <Text size="md">{`Name: ${data?.user?.name}`}</Text>
        <Text size="md">{`Phone Number: ${data?.user?.phoneNumber}`}</Text>
        <Text size="md">{`City / Region: ${data?.user?.cityRegion}`}</Text>
        <Text size="md">{`Accomodation Details: ${data?.user?.accomodationDetails}`}</Text>
        <Text size="md">{`Host Capacity: ${data?.user?.groupSize}`}</Text>
        <Text size="md">{`Spoken Languages ${data?.user?.languages}`}</Text>
      </>
    ) : (
      <SignupForm />
    );
  };

  return (
    <>
      <Head>
        <title>Profile Page</title>
        <meta name="" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Space h="xl" />
        <Paper padding="lg" shadow="sm" radius="md" withBorder>
          <LoadingOverlay visible={loading} />
          <Title order={3}>My Profile</Title>
          <Space h="lg" />

          {renderUserInfo()}
        </Paper>
      </Layout>
    </>
  );
}
