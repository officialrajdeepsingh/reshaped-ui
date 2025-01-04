import { View, Container, Card, Text, Image, Grid } from "reshaped";

export default function Home() {

  return (
  <Container width="1024px">
     <Grid columns={2} gap={4}>
        <View align="center">
          <Card padding={5}>
            <View>
               <Image src="https://reshaped.so/img/examples/image-retina.webp" alt="Canyon rock" />
             </View>
            <View className="mt-6" padding={2}>
              <Text variant="featured-1" weight="bold"> How to use Reshaped UI in Next.js? </Text>
              <Text variant="body-2" as="p"> Located in a quiet street in hip and happening Amsterdam East near the Beukenplein and Oosterpark.</Text>
            </View>
          </Card>
        </View>
        <View align="center">
          <Card padding={5}>
            <View>
               <Image src="https://reshaped.so/img/examples/image-retina.webp" alt="Canyon rock" />
             </View>
            <View className="mt-6" padding={2}>
              <Text variant="featured-1" weight="bold"> How to use Reshaped UI in Next.js? </Text>
              <Text as="p" variant="body-2"> Located in a quiet street in hip and happening Amsterdam East near the Beukenplein and Oosterpark.</Text>
            </View>
          </Card>
        </View>
        <View align="center">
          <Card padding={5}>
             <View>
               <Image className="mx-auto" src="https://reshaped.so/img/examples/image-retina.webp" alt="Canyon rock" />
             </View>
            <View className="mt-6" padding={2}>
              <Text variant="featured-1" weight="bold"> How to use Reshaped UI in Next.js? </Text>
              <Text as="p"  variant="body-2"> Located in a quiet street in hip and happening Amsterdam East near the Beukenplein and Oosterpark.</Text>
            </View>
          </Card>
        </View>
      </Grid>
  </Container>
  );
}
