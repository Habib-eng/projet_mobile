import { Card, Paragraph } from "react-native-paper";

export const Certificat = () => {
  return (
    <View>
      <Card>
        <Card.Title
          title="Certificat"
          subtitle="16 mar 2023, Dr. Thawedi Slim"
        />
        <Card.Content>
          <View>
            <Paragraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </Paragraph>
            <Paragraph style={{ fontWeight: 50 }}>of 3 Days</Paragraph>
            <Paragraph>
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen
              book.
            </Paragraph>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};
