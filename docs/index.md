# QA Avancado Pack

Pacote de extensões para **QA Automation com Java** no Visual Studio Code.

## Sobre o projeto

O **QA Avancado Pack** é um Extension Pack criado para facilitar a vida de profissionais de qualidade de software que trabalham com automação de testes em Java.

Ele reúne extensões úteis para desenvolvimento, testes automatizados, APIs, BDD, Maven e produtividade no VS Code.

## Objetivo

Padronizar rapidamente um ambiente profissional de automação de testes no VS Code.

Com este pacote, o profissional de QA ou SDET consegue preparar o editor com extensões essenciais sem precisar instalar tudo manualmente.

## Público-alvo

Este pacote é indicado para:

- QA Analysts
- SDETs
- Automadores de testes
- Desenvolvedores Java
- Profissionais que testam APIs
- Profissionais que usam Cucumber, Selenium, JUnit e Maven

## Tecnologias apoiadas

- Java
- Maven
- JUnit
- Selenium
- RestAssured
- Cucumber
- Gherkin
- APIs REST
- Visual Studio Code

## Como instalar

Acesse a extensão no Visual Studio Code Marketplace:

[Instalar QA Avancado Pack](https://marketplace.visualstudio.com/items?itemName=RoseDias.qa-pack)

Ou pesquise no VS Code por:

```text
QA Avancado Pack
```

## Como usar

Após instalar o pacote, o VS Code irá instalar ou sugerir as extensões configuradas no Extension Pack.

Depois disso, você poderá criar e manter projetos de automação Java com mais produtividade.

## Exemplo de automação Java com RestAssured

```java

import io.restassured.RestAssured;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;

class ApiTest {

    @Test
    void deveRetornarStatus200() {
        RestAssured.baseURI = "https://api.exemplo.com";

        given()
            .when()
            .get("/usuarios")
            .then()
            .statusCode(200);
    }
}

```

## Repositório

Este repositório contém apenas a documentação pública da extensão.

O código-fonte da extensão é mantido em um repositório privado.

##  Diferenciais
Facilita a configuração inicial do ambiente
Ajuda a padronizar o VS Code para QA Automation
Reúne extensões focadas em Java e testes
Apoia projetos com API, BDD e automação funcional
Pode ser usado como base para times de QA

## Autora

### Rose Dias

QA Analyst | SDET | Java Automation | API Testing

## Licença

A documentação deste projeto pode ser utilizada apenas para fins de consulta e apresentação do projeto.










