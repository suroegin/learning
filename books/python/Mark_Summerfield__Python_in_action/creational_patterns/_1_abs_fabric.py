def main():
    telegram_message = build_message(TelegramFactory)
    whatsapp_message = build_message(WhatsAppFactory)
    print(telegram_message)
    print(whatsapp_message)


def build_message(factory):
    message = factory.generate_text(pre="> ", end="()")
    return message


class TelegramFactory:

    @classmethod
    def generate_text(cls, pre, end):
        return f"{pre} Hello from {cls.__name__} {end}"


class WhatsAppFactory(TelegramFactory):
    pass
